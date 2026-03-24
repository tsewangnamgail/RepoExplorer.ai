from typing import Annotated, Sequence, TypedDict
import operator
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage, ToolMessage
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolExecutor, ToolNode

from app.services.groq_service import get_groq_llm
from app.agents.tools import create_retriever_tool

class AgentState(TypedDict):
    messages: Annotated[Sequence[BaseMessage], operator.add]
    repo_id: str

def get_agent_graph(repo_id: str):
    llm = get_groq_llm()
    search_tool = create_retriever_tool(repo_id)
    tools = [search_tool]
    
    # Bind tools to the LLM
    llm_with_tools = llm.bind_tools(tools)
    
    # LangGraph predefined ToolNode simplifies executing tools
    tool_node = ToolNode(tools)
    
    # Basic node functions
    def call_model(state: AgentState):
        messages = state['messages']
        response = llm_with_tools.invoke(messages)
        return {"messages": [response]}
        
    def should_continue(state: AgentState):
        messages = state['messages']
        last_message = messages[-1]
        if last_message.tool_calls:
            return "continue"
        return "end"
        
    # Build Graph
    workflow = StateGraph(AgentState)
    
    workflow.add_node("agent", call_model)
    workflow.add_node("action", tool_node)
    
    workflow.set_entry_point("agent")
    
    workflow.add_conditional_edges(
        "agent",
        should_continue,
        {
            "continue": "action",
            "end": END
        }
    )
    
    workflow.add_edge("action", "agent")
    
    app = workflow.compile()
    return app

async def query_agent(repo_id: str, question: str) -> dict:
    graph = get_agent_graph(repo_id)
    inputs = {"messages": [HumanMessage(content=question)], "repo_id": repo_id}
    
    # Use final output stream or invoke
    final_state = await graph.ainvoke(inputs)
    messages = final_state['messages']
    
    # Extract the final AI response
    final_answer = messages[-1].content
    
    # Extract sources from tool results if any
    sources = []
    for m in messages:
        if isinstance(m, ToolMessage) and m.content:
            # Our custom search_codebase output format has "File: <path>"
            lines = m.content.split('\n')
            for line in lines:
                if line.startswith("File:"):
                    source = line.split("File: ")[1].strip()
                    if source not in sources:
                        sources.append(source)
    
    return {
        "answer": final_answer,
        "sources": sources
    }

from langchain_core.tools import tool
from app.rag.vector_store import get_vector_store
from app.core.logging import logger

def create_retriever_tool(repo_id: str):
    """Factory to create a retrieval tool dynamically for a specific repository."""
    
    @tool(f"search_codebase_{repo_id}")
    def search_codebase(query: str) -> str:
        """Search the codebase for relevant snippets based on a query."""
        logger.info(f"Agent searching codebase: {query}")
        vector_store = get_vector_store(repo_id)
        retriever = vector_store.as_retriever(search_kwargs={"k": 5})
        docs = retriever.invoke(query)
        
        if not docs:
            return "No relevant information found in the codebase."
            
        formatted = "\n\n".join([f"File: {d.metadata.get('source', 'Unknown')}\nContent:\n{d.page_content}" for d in docs])
        return formatted
        
    return search_codebase

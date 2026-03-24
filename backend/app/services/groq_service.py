from langchain_groq import ChatGroq
from app.core.config import settings

def get_groq_llm(temperature: float = 0.0) -> ChatGroq:
    return ChatGroq(
        groq_api_key=settings.GROQ_API_KEY,
        model_name="llama3-8b-8192", # Free and fast, but can use "mixtral-8x7b-32768" or others
        temperature=temperature
    )

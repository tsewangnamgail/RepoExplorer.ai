from fastapi import APIRouter, HTTPException
from app.schemas.requests import QueryRequest
from app.agents.graph import query_agent

router = APIRouter()

@router.post("/query")
async def ask_question(request: QueryRequest):
    try:
        result = await query_agent(request.repo_id, request.question)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

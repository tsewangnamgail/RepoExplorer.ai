from fastapi import APIRouter, HTTPException
from app.schemas.requests import IngestRequest
from app.rag.ingestion import ingest_repository

router = APIRouter()

@router.post("/ingest")
async def ingest_repo(request: IngestRequest):
    try:
        result = await ingest_repository(request.repo_url)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

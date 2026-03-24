import os
from langchain_core.documents import Document
from app.services.github_service import GitHubService
from app.rag.chunking import get_text_splitter
from app.rag.vector_store import get_vector_store
from app.core.logging import logger

github_service = GitHubService()

# Basic language extensions map
ALLOWED_EXTENSIONS = {
    ".py", ".js", ".ts", ".jsx", ".tsx", ".md", ".java", ".cpp", ".c", ".h", ".go", ".rs", ".html", ".css", ".json"
}

async def ingest_repository(repo_url: str) -> dict:
    repo_name = repo_url.rstrip('/').split('/')[-1]
    if repo_name.endswith('.git'):
        repo_name = repo_name[:-4]
        
    local_path = github_service.clone_repo(repo_url)
    
    documents = []
    
    # Simple language-aware parsing: we read files into Documents
    for root, dirs, files in os.walk(local_path):
        # Exclude hidden directories like .git
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        
        for file in files:
            ext = os.path.splitext(file)[1]
            if ext in ALLOWED_EXTENSIONS:
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                    
                    rel_path = os.path.relpath(file_path, local_path)
                    docs = Document(
                        page_content=content,
                        metadata={"source": rel_path, "repo": repo_name, "extension": ext}
                    )
                    documents.append(docs)
                except Exception as e:
                    logger.warning(f"Failed to read file {file_path}: {e}")
                    
    logger.info(f"Loaded {len(documents)} files from {repo_name}")
    
    # Chunking
    splitter = get_text_splitter()
    chunks = splitter.split_documents(documents)
    
    logger.info(f"Created {len(chunks)} chunks for {repo_name}")
    
    # Store in ChromaDB
    vector_store = get_vector_store(repo_name)
    vector_store.add_documents(chunks)
    logger.info(f"Ingested {repo_name} into ChromaDB")
    
    return {"status": "success", "repo_id": repo_name, "chunks": len(chunks)}

# RepoExplorer.ai - Backend

Agentic RAG-powered GitHub repository explorer. Build with FastAPI, LangGraph, Groq, and ChromaDB.

## 🚀 Setup Instructions (using uv)

1. **Install uv** (if you haven't already):
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   ```

2. **Clone the repository** and navigate to the backend folder:
   ```bash
   cd backend
   ```

3. **Install dependencies**:
   ```bash
   uv sync
   ```

4. **Environment Variables**:
   Copy `.env.example` to `.env` and add your Groq API Key:
   ```bash
   cp .env.example .env
   ```
   Edit `.env`:
   ```env
   GROQ_API_KEY=gsk_your_key_here
   ```

5. **Run the Backend**:
   ```bash
   uv run uvicorn app.main:app --reload
   ```

## 🛠 Features

- **Multi-repo Support**: Ingest any public GitHub repository.
- **Agentic RAG**: Uses LangGraph to decide when to retrieve context.
- **Code-aware Chunking**: Better retrieval for programming languages.
- **Fast Inference**: Powered by Groq LLMs.
- **Persistent Storage**: ChromaDB stores vector embeddings locally.

## 📡 API Endpoints

- `POST /api/repo/ingest`: Clone and index a repository.
- `POST /api/ai/query`: Ask questions about an indexed repository.
- `GET /`: Health check.

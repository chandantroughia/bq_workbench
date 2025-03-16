# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Import BigQuery service (to be implemented later)
from bigquery_service import run_bigquery_query

# Create FastAPI instance
app = FastAPI()

# Enable CORS so frontend (React) can call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Health Check Route (Test if API is working)
@app.get("/ping")
def ping():
    return {"message": "BigQuery API is running!"}

# ✅ Define Pydantic Model for query requests
class QueryRequest(BaseModel):
    query: str  # The SQL query to run in BigQuery

# 🔜 Route to run BigQuery queries (Will be implemented in `bigquery_service.py`)
@app.post("/run-query")
def run_query(request: QueryRequest):
    try:
        result = run_bigquery_query(request.query)  # Calls function from `bigquery_service.py`
        return {"status": "success", "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Run FastAPI using: `uvicorn main:app --reload`
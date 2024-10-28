# https://bulma.io/
# https://vite.dev/guide/
# https://www.solidjs.com/

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
from dotenv import load_dotenv
from typing import List

from src.common.serviceadapters.ChatGptAdapter import ChatGptAdapter
from src.common.serviceadapters.YoutubeTranscriptAdapter import YoutubeTranscriptAdapter
# https://fastapi.tiangolo.com/how-to/graphql/
app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the data model for the item
class Summary(BaseModel):
    content: str = None

@app.post("/summary/", response_model=Summary)
async def create_item(summary: Summary):
    # Optionally add some logic to check for duplicates or validation
    return summary

@app.get("/summary", response_model=Summary)
async def transcribeSummary(video_url: str):
    transcript = transcriber.transcribe(video_url)
    summary = Summary()
    summary.content = gpt.generateSummary(transcript)
    return summary

@app.get("/")
async def root():
    return {"message": "Welcome to the FastAPI POST API!"}

if __name__ == "__main__":
    load_dotenv()
    transcriber = YoutubeTranscriptAdapter()
    gpt = ChatGptAdapter()
    uvicorn.run(app, host="0.0.0.0", port=8000)

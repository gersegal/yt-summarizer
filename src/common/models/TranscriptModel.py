

from pydantic import BaseModel

class TranscriptModel(BaseModel):
    content_type: str
    video_id: str
    transcript: str
    date_uploaded: str

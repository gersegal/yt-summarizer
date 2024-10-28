from youtube_transcript_api import YouTubeTranscriptApi

class YoutubeTranscriptAdapter:

    def __init__(self):
        pass


    def transcribe(self, video_url: str) -> str:
        transcript = YouTubeTranscriptApi.get_transcript(video_url)
        sentences = [sentence.get('text') for sentence in transcript]
        return "\n".join(sentences)

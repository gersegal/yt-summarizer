from youtube_transcript_api import YouTubeTranscriptApi
from openai import OpenAI

client = OpenAI(api_key='[API key]')

url = '[Video link]'

video_id = url.replace('https://www.youtube.com/watch?v=', '')

transcript = YouTubeTranscriptApi.get_transcript(video_id)

output=''
for x in transcript:
  sentence = x['text']
  output += f' {sentence}\n'

response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "You are a journalist."},
    {"role": "assistant", "content": "write a detailed 250 word summary of this video, after the summary write a set of key takeaway bulletpoints"},
    {"role": "user", "content": output}
  ]
)
summary = response.choices[0].message.content

print('>>>SUMMARY:')
print(summary)

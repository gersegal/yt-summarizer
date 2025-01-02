#Process Overview (Individual summaries):
#Select videos, create array of videos
#Create transcripts and add to video transcripts array
#Build summary of each transcript

#Process Overview (Individual summaries):
#Select videos, create array of videos
#Create transcripts and add to video transcripts array
#Build summary of each transcript



from youtube_transcript_api import YouTubeTranscriptApi
#import openai
from openai import OpenAI

import numpy as np

client = OpenAI(api_key='')

#openai.api_key = ''

global var
global arti
global videos
global articles
global summaries

global video_transcripts

global post_examples

video_transcripts = []

videos = []

summaries = []

post_examples = []



#var = ''

#Videos to consume
urls = ('', '', '')
for i in urls:
    var=i 
    videos.append(var)

#Get summary for each one of the videos

for video in videos:

    print(video)
    video_id = video.replace('https://www.youtube.com/watch?v=', '')
    print(video_id)

    transcript = YouTubeTranscriptApi.get_transcript(video_id)
    #1. Append each transcript into an array 
    video_transcripts.append(transcript)


#2. If the videos array index has reach max of videos (summary array filled), take the content of th summary array and consolidate it as a knowledgebase. 
if (len(video_transcripts) == 3):
    print("Length is 3: ")

    #Grab each individual transcript array
    for i in range(len(video_transcripts)):
        #print(i, video_transcripts[i], end="")
        #print()
        output=''
        for x in video_transcripts[i]:
            sentence = x['text']
            output += f' {sentence}\n'

        response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a youtube content creator"},
            {"role": "assistant", "content": "Consume the knowledge provided and write your very own 250 word insight based on that info,"},
            {"role": "assistant", "content": "Provide a summary of the content"},
            {"role": "user", "content": output}
        ]
        )
        #summary = response["choices"][0]["message"]["content"]
        summary = response.choices[0].message.content

        #print('>>>SUMMARY:')
        #print(summary)  
        summaries.append(summary)
        #UP TP THIS POINT WE CAN DELIVER INDIVIDUAL SUNNARIES ON EACH OF THE VIDEOS PROVIDED
"""
print("Number us summaries:")
print(len(summaries))  
print("General summary:")
print(summaries) 
print("Summary 1:")
print(summaries[0])  
print("Summary 2:")
print(summaries[1])  
print("Summary 3:")
print(summaries[2])    
"""  

#STEPS 3 AND 4 WILL BE ABOUT CONSOLIDATING THE INDIVIDUAL SUMMARIES IN 1 LARGE SUMMARY THAT CAN BE PROCESSED BY A SINGLE CHAT GPT QUERY, RATHER THAN NEEDING INDIVIDUAL ISOLATED QUERIES
#3. read examples of IG posts
#Videos to consume
post1 = "Example of tone"
post2 = "Example of tone 2"

posts = (post1, post2)
for p in urls:
    posts=p 
    post_examples.append(posts)

#print("Video 2 is: "+videos[2])

#Get summary for each one of the videos

for post_example in post_examples:

    print(post_example)

#4. Based on that knowledge, create the IG posts

#Build a general summary built with the 3 prior summaries
general_summary = summaries[0] + summaries[1] + summaries[2]
print("General summary: ")
print(general_summary)

#Build a summary of the general summary
if (len(summaries) == 3):
    print("Number us summaries:")
    print(len(summaries))

    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "Consider that you will be writing with a similar tone and feel to the content in "+post_examples[0]+ "and"+post_examples[1]},
        {"role": "system", "content": "You are a journalist"},
        {"role": "assistant", "content": "Give me a detailed overview (250 words) about the following video transcripts: "},
        {"role": "user", "content": general_summary},
        {"role": "assistant", "content": "Based on the"+general_summary+" generate ideas for 4 Instagram posts; insight, quotes type of posts "},
    ]
    )
    #summary = response["choices"][0]["message"]["content"]
    final_summary = response.choices[0].message.content

    print('>>>final_summary:')
    print(final_summary)  



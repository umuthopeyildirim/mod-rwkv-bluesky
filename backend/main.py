from atproto import Client
from fastapi import FastAPI, BackgroundTasks
import time
import json
import uvicorn
import asyncio
import os
from dotenv import load_dotenv

load_dotenv()
app = FastAPI()


client = Client(base_url='https://bsky.social')
client.login(os.getenv('USERNAME'),os.getenv('PASSWORD') )

app = FastAPI()

def process_timeline():
    timeline = client.get_timeline(algorithm='reverse-chronological')
    with open('data.json', 'r') as file:
        json_data = []
        try:
            json_data = json.load(file)
        except json.JSONDecodeError:
            json_data = []
        for feed_view in timeline.feed:
            if feed_view.post.uri in json_data:
                post = feed_view.post.record
                author = feed_view.post.author
                images = []
                if feed_view.post.embed is not None and hasattr(feed_view.post.embed,'images'):
                    for image in feed_view.post.embed.images:
                        images.append(image.fullsize)
                if images:
                    json_data.append({
                        feed_view.post.uri :{
                            'images' : images,
                            'display_name' : author.display_name,
                            'text' : post.text
                        }
                    })
    with open('data.json', 'w') as file:
        json.dump(json_data, file, indent=2)

@app.post("/api/process_timeline")
async def process_timeline_api(background_tasks: BackgroundTasks):
    # Use background task to run the blocking process_timeline
    background_tasks.add_task(process_timeline)
    # Load JSON data from the file
    with open('data.json', 'r') as file:
        json_data = json.load(file)
    return {"Data": json_data}

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000)

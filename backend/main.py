from atproto import Client
from fastapi import FastAPI, BackgroundTasks
import time
import json
import uvicorn
import asyncio
import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware


load_dotenv()
app = FastAPI()

# Define a list of origins that should be permitted to make cross-origin requests
origins = [
    "http://localhost:3000",  # Assuming your React app is served from this URL
    "http://localhost:8000",  # Include this if your frontend might request from the same origin
]

# Add CORSMiddleware to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specified origins to make requests
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


client = Client(base_url='https://bsky.social')
client.login(os.getenv('USERNAME'),os.getenv('PASSWORD') )

def process_timeline():
    timeline = client.get_timeline(algorithm='reverse-chronological')
    with open('data.json', 'w+') as file:
        json_data = {}
        try:
            json_data = json.load(file)
        except json.JSONDecodeError:
            json_data = {}
        new_data = {}
        for feed_view in timeline.feed:
            if feed_view.post.uri not in json_data:
                post = feed_view.post.record
                author = feed_view.post.author
                images = []
                if feed_view.post.embed is not None and hasattr(feed_view.post.embed,'images'):
                    for image in feed_view.post.embed.images:
                        images.append(image.fullsize)
                if images:
                    new_data[feed_view.post.uri] = {
                            'images' : images,
                            'display_name' : author.display_name,
                            'text' : post.text
                        }
        new_data = process_images_and_update_classes(new_data)
        json_data.update(new_data)
        json.dump(json_data, file, indent=2)

def process_images_and_update_classes(posts):
    new_data = {}
    for post_uri, post_data in posts.items():
        images = post_data['images']
        display_name = post_data['display_name']
        post_text = post_data['text']

        # Assume process_images is a function that processes images and returns text class tags
        image_tags = process_images(images)

        # Update the 'new_data' dictionary with the text class tags
        new_data[post_uri] = {
            'display_name': display_name,
            'image_classes': image_tags,
            'images': images,
            'text': post_text
        }

    # Now 'new_data' contains the processed data in the desired structure
    return new_data

def process_images(images):
    """
    Placeholder function to process images and return text class tags.

    Parameters:
    - images: List of images for a post.

    Returns:
    - List of text class tags.
    """
    # Your image processing logic here
    # For example, you might use a machine learning model to classify text in images
    # Replace the following line with your actual logic
    text_tags = ["tag1"]

    return text_tags
    

@app.get("/api/process_timeline")
async def process_timeline_api(background_tasks: BackgroundTasks):
    # Use background task to run the blocking process_timeline
    background_tasks.add_task(process_timeline)
    # Load JSON data from the file
    with open('data.json', 'r') as file:
        json_data = json.load(file)
    return {"Data": json_data}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

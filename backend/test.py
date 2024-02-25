from atproto import Client
from fastapi import FastAPI, BackgroundTasks
import time
import json
import uvicorn
import asyncio
import os
from dotenv import load_dotenv
import json

load_dotenv()


client = Client(base_url='https://bsky.social')
client.login(os.getenv('USERNAME'),os.getenv('PASSWORD') )

feed  = client.app.bsky.feed.get_feed(params = {
    'feed' :'at://did:plc:oav2ixis42pm5fqrqhp4ey3w/app.bsky.feed.generator/suggestive'
})
data = {}
for item in feed.feed:
    if hasattr(item.post.embed,'images'):
        data[item.post.uri] = {
            "display_name" : item.post.author.display_name,
            "text": item.post.record.text,
            "images" : [],
            "image_classes": [],
        }
        for images in item.post.embed.images:
            data[item.post.uri]['images'].append(images.fullsize)
            data[item.post.uri]['image_classes'].append('nsfw')

# Writing to a JSON file
with open('output.json', 'w') as json_file:
    json.dump(data, json_file, indent=2)

print("Data has been written to 'output.json'")
# print(json.dumps().dict(),indent=4))
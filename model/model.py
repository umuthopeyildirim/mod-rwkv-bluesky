import requests
from PIL import Image
from io import BytesIO
from torchvision import transforms
import torch
from models.FaceRWKV import FaceRWKV, RWKVConfig

checkpoint_path = "checkpoint/epoch5.pth"
config_path = "config/done/xlargeDone.yml"


def preprocess_image(image, resolution=(600, 400)):
    preprocess = transforms.Compose([
        transforms.ToTensor(),
        transforms.Resize(resolution, antialias=True),
        transforms.RandomHorizontalFlip()
    ])
    image_tensor = preprocess(image).unsqueeze(0)  # Add batch dimension
    return image_tensor


def download_image(url):
    response = requests.get(url)
    image = Image.open(BytesIO(response.content))
    return image


def load_model(checkpoint_path, config_path):
    config = RWKVConfig()
    config.from_yaml(config_path)  # Pass the correct variable
    model = FaceRWKV(config)
    model.load_state_dict(torch.load(
        checkpoint_path, map_location=torch.device('cpu')))
    model.eval()
    return model


def predict(model, image_tensor, device='cpu'):
    image_tensor = image_tensor.to(device)
    with torch.no_grad():
        outputs = model(image_tensor)
        _, predicted = torch.max(outputs, 1)
    return predicted.item()


def classify_image(image_url):
    # Download and preprocess the image
    image = download_image(image_url)
    image_tensor = preprocess_image(image)

    # Assume `checkpoint_path` and `config_path` are defined
    model = load_model(checkpoint_path, config_path)

    # Predict the class of the image
    predicted_class = predict(model, image_tensor)
    class_dict = {'hentai': 0, 'normal': 1,
                  'nsfw': 2, 'violence': 3, 'weapon': 4}
    predicted_class = list(class_dict.keys())[list(
        class_dict.values()).index(predicted_class)]

    return predicted_class


# Example usage
# image_url = "https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/6d/ae/72/6dae72c76bfbce47b93857e182982ebe/6dae72c76bfbce47b93857e182982ebe.30.jpg"  # NSFW

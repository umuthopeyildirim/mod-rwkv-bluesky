import os
import torch
from torch.utils.data import Dataset
from torchvision import transforms
from PIL import Image
import torch.nn


class CAERSRDataset(Dataset):

    def __init__(self, data_dir, resolution, mode="train"):
        """
        Custom dataset class for the CAERSR dataset.

        Args:
        - data_dir: Directory path to the dataset.
        - resolution: Desired resolution for image resizing.

        """
        self.data_dir = data_dir
        # {'class_name': 0, 'class_name': 1, ...}
        print("data_dir", self.data_dir)
        self.class_dict = self.create_class_dict()
        # ['data_dir/class_name/file_name', ...]
        print("class_dict", self.class_dict)
        self.file_paths = self.get_file_paths()
        if mode == "test":
            self.transforms = transforms.Compose([
                transforms.ToTensor(),
                transforms.Resize(resolution),
            ])
        elif mode == "train":
            self.transforms = transforms.Compose([
                transforms.ToTensor(),
                transforms.Resize(resolution),
                transforms.RandomHorizontalFlip()
            ])
        else:
            raise ValueError("Invalid mode. Must be either 'train' or 'test'.")

    def __len__(self):
        """
        Get the total number of samples in the dataset.

        Returns:
        - Total number of samples.

        """
        return len(self.file_paths)

    def __getitem__(self, idx):
        """
        Get a sample from the dataset.

        Args:
        - idx: Index of the sample.

        Returns:
        - Tuple containing the image tensor and label.

        """
        file_path = self.file_paths[idx]
        image = Image.open(file_path).convert('RGB')
        label = self.get_label(file_path)

        image = self.transforms(image)
        label = torch.tensor(label)  # not sure about bracets

        return image, label

    def get_classes(self):
        """
        Get the number of classes in the dataset.

        Returns:
        - Number of classes.

        """
        return len(self.class_dict)

    def create_class_dict(self):
        """
        Create a dictionary mapping class names to class indices,
        ensuring that the indices start at 0.
        """
        class_names = sorted([d for d in os.listdir(
            self.data_dir) if not d.startswith('.')])
        class_dict = {class_name: idx for idx,
                      class_name in enumerate(class_names)}
        return class_dict

    def get_file_paths(self):
        """
        Get the file paths of all images in the dataset, ignoring non-image files.

        Returns:
        - List of file paths.
        """
        file_paths = []
        for folder in os.listdir(self.data_dir):
            folder_path = os.path.join(self.data_dir, folder)
            if os.path.isdir(folder_path):
                for file_name in os.listdir(folder_path):
                    # Skip hidden files like .DS_Store
                    if file_name.startswith('.'):
                        continue
                    file_path = os.path.join(folder_path, file_name)
                    # Check for common image file extensions
                    if os.path.isfile(file_path) and file_name.lower().endswith(('png', 'jpg', 'jpeg', 'JPEG')):
                        file_paths.append(file_path)
        return file_paths

    def get_label(self, file_path):
        """
        Get the label for a given file path.

        Args:
        - file_path: Path of the image file.

        Returns:
        - Label corresponding to the class of the image.

        """
        folder_name = os.path.basename(os.path.dirname(file_path))
        return self.class_dict[folder_name]

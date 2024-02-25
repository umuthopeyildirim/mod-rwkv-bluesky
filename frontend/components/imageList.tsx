import React, { useEffect, useState } from 'react';
import { CardContent, Card } from "@/components/ui/card";

// Adjusted type to include imageClasses
type ImageInfo = {
  id: string;
  displayName: string;
  imageClasses: string[];
  images: string[];
};

export default function Component() {
  const [images, setImages] = useState<ImageInfo[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/process_timeline', {
          // const response = await fetch('/api/process_timeline', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        const data = await response.json();
        const fetchedImages = Object.keys(data.Data).map(key => {
          const item = data.Data[key];
          return {
            id: key,
            displayName: item.display_name,
            imageClasses: item.image_classes,
            images: item.images,
          };
        });
        setImages(fetchedImages);
      } catch (error) {
        console.error("Failed to load images", error);
      }
    };

    fetchImages();
    const intervalId = setInterval(fetchImages, 3000);
    return () => clearInterval(intervalId);
  }, []); // Removed dependency to prevent excessive fetching

  // Function to determine the box color
  const getBoxStyle = (imageClass: string[]): string => {
  // Function to determine the box style based on the first image class
  const firstClass = imageClass[0]; // Considering the first class for styling
  switch (firstClass) {
    case 'tag1':
      // White might represent safe content
      return "border-4 border-white";
    case 'tag2':
      // Bright red for potentially harmful or explicit content
      return "border-4 border-red-500";
    case 'tag3':
      // Bright yellow for caution, possibly sensitive content
      return "border-4 border-yellow-500";
    case 'tag4':
      // Bright orange for content that's questionable
      return "border-4 border-orange-500";
    case 'tag5':
      // Bright green for content that's slightly NSFW but not explicit
      return "border-4 border-green-500";
    default:
      // A neutral color for unclassified or pending classification content
      return "border-4 border-gray-500";
  }
};


  return (
    <div className="px-4 md:px-6 lg:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-6 items-start md:gap-12 lg:gap-20 max-w-6xl mx-auto">
        {images.map((image, index) => (
          image.images.map((imgUrl, imgIndex) => (
            <Card key={`${image.id}-${imgIndex}`} className={`w-full ${getBoxStyle(image.imageClasses)}`}>
              <CardContent className="p-4 md:p-6 grid gap-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold tracking-tight">{image.displayName}</h2>
                  <p className="text-sm leading-normal text-gray-500 dark:text-gray-400">
                    Image Classes: {image.imageClasses.join(', ')}
                  </p>
                </div>
                <div className={`aspect-video w-full max-w-[400px] mx-auto overflow-hidden rounded-lg ${getBoxStyle(image.imageClasses)}`}>
                  <img
                    alt={`${image.displayName} - ${imgIndex + 1}`}
                    className="aspect-video object-cover"
                    src={imgUrl}
                    width="400"
                    height="225"
                  />
                </div>
              </CardContent>
            </Card>
          ))
        ))}
      </div>
    </div>
  );
}

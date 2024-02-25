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
    const fetchImages = () => {
      fetch('http://localhost:8000/api/process_timeline', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          // If you need to send data in the future, stringify it here
          // body: JSON.stringify(yourDataHere),
        })
        .then(response => response.json())
        .then(data => {
          const fetchedImages = Object.keys(data.Data).map(key => {
            const item = data.Data[key];
            return {
              id: key,
              displayName: item.display_name,
              imageClasses: item.image_classes,
              images: item.images, // Assuming each post can have multiple images
            };
          });

          // Check if the fetched images are different from the current state
          if (JSON.stringify(fetchedImages) !== JSON.stringify(images)) {
            setImages(fetchedImages);
          }
        })
        .catch(error => console.error("Failed to load images", error));
    };

    // Fetch images immediately on component mount
    fetchImages();

    // Set up an interval to fetch images every 3 seconds
    const intervalId = setInterval(fetchImages, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images]); // This dependency might cause excessive fetching, consider removing it or finding another approach

  return (
    <div className="px-4 md:px-6 lg:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-6 items-start md:gap-12 lg:gap-20 max-w-6xl mx-auto">
        {images.map((image, index) => (
          image.images.map((imgUrl, imgIndex) => (
            <Card key={`${image.id}-${imgIndex}`} className="w-full">
              <CardContent className="p-4 md:p-6 grid gap-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold tracking-tight">{image.displayName}</h2>
                  <p className="text-sm leading-normal text-gray-500 dark:text-gray-400">
                    Image Classes: {image.imageClasses.join(', ')}
                  </p>
                </div>
                <div className="aspect-video w-full max-w-[400px] mx-auto overflow-hidden rounded-lg">
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

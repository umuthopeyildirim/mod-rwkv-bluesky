import React, { useEffect, useState } from 'react';
import { CardContent, Card } from "@/components/ui/card";

// Assuming you have a type for your images
type ImageInfo = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export default function Component() {
  const [images, setImages] = useState<ImageInfo[]>([]);

  useEffect(() => {
    const fetchImages = () => {
      fetch('/api/images')
        .then(response => response.json())
        .then(newImages => {
          // Check if the fetched images are different from the current state
          if (JSON.stringify(newImages) !== JSON.stringify(images)) {
            setImages(newImages);
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
  }, [images]); // Be cautious with this dependency, it might cause excessive fetching

  return (
    <div className="px-4 md:px-6 lg:px-8 w-full">
      <div className="grid md:grid-cols-2 gap-6 items-start md:gap-12 lg:gap-20 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 md:gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl/4xl lg:text-6xl/5xl">
              Image Classification
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Classify images with the power of AI. Below are the images you can classify.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:gap-8 items-start order-2 md:order-1">
          {images.map((image) => (
            <Card key={image.id} className="w-full">
              <CardContent className="p-4 md:p-6 grid gap-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-bold tracking-tight">{image.title}</h2>
                  <p className="text-sm leading-normal text-gray-500 dark:text-gray-400">
                    {image.description}
                  </p>
                </div>
                <div className="aspect-video w-full max-w-[400px] mx-auto overflow-hidden rounded-lg">
                  <img
                    alt={image.title}
                    className="aspect-video object-cover"
                    src={image.imageUrl}
                    width="400"
                    height="225"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

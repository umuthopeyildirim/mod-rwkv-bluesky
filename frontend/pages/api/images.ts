import type { NextApiRequest, NextApiResponse } from 'next';

// Example data array
const images = [
    {
      id: 1,
      title: "Sunset",
      description: "A beautiful sunset",
      imageUrl: "https://t4.ftcdn.net/jpg/01/04/78/75/240_F_104787586_63vz1PkylLEfSfZ08dqTnqJqlqdq0eXx.jpg",
    },
    {
      id: 2,
      title: "Mountains",
      description: "Snowy mountains",
      imageUrl: "https://t4.ftcdn.net/jpg/00/67/24/59/240_F_67245954_ejVa8C414CwJ9X0UadIFu1QEUjeLuFnO.jpg",
    },
    // Add more images as needed
  ];
  
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("works")
    res.status(200).json(images);

  }
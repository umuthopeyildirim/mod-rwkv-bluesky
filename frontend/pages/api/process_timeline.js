// pages/api/process_timeline.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method === 'POST') {
    try {
      // Specify the path to the data.json file
      // Adjust the path as necessary based on your project structure
      const filePath = path.resolve('./public','data.json');
      const jsonData = fs.readFileSync(filePath, 'utf8');
      const originalData = JSON.parse(jsonData);

      // Wrap the original data in a "Data" key
      const data = { Data: originalData };

      // Return the modified JSON data as the response
      res.status(200).json(data);
    } catch (error) {
      // Handle errors (e.g., file not found)
      res.status(500).json({ error: 'Failed to load data' });
    }
  } else {
    // If not a POST request, return 405 - Method Not Allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

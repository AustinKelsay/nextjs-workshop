import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Define the path to the posts.json file
  const postsDirectory = path.join(process.cwd(), 'src', 'data');
  const filePath = path.join(postsDirectory, 'posts.json');

  // Handle GET requests
  if (req.method === 'GET') {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const posts = JSON.parse(fileContents);
    res.status(200).json(posts);
  } 
  // Handle POST requests
  else if (req.method === 'POST') {
    const newPost = req.body;

    // Generate a simple slug from the title
    const slug = newPost.title.replace(/\s+/g, '-').toLowerCase();

    // Read the current posts
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const posts = JSON.parse(fileContents);

    // Add the new post with a slug
    posts.push({ ...newPost, slug });

    // Write the updated posts back to the file
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf8');

    // Respond with a success message
    res.status(201).json({ message: 'Post created' });
  } else {
    // Method Not Allowed
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

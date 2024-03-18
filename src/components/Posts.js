import { data } from 'autoprefixer';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Posts() {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then((data) => {
        console.log('data', data);
        setPosts(data);
      });
  }, []);


  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.slug} className="mb-4">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
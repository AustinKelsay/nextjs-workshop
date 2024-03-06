import React from 'react';
import Link from 'next/link';
import posts from '../data/posts';

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-4">Simple Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug} className="mb-3">
            <Link className="text-blue-600 visited:text-purple-600" href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

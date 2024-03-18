import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import posts from '@/data/posts';

export default function BlogPost() {
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { slug } = router.query;
      const postFound = posts.find(p => p.slug === slug);
      setPost(postFound);
    }
  }, [router.isReady, router.query]);

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </article>
  );
}

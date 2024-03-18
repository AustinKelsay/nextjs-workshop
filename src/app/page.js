"use client";
import Link from 'next/link';
import Posts from '@/components/Posts';

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline mb-4">Simple Blog</h1>
      <div className="mb-6">
        <Link href="/posts/new" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Post
        </Link>
      </div>
      <Posts />
    </div>
  );
}
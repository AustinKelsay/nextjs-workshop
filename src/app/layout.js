import React from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-blue-500 text-white p-4">
        <Link className="text-2xl font-bold" href="/">
          My Simple Blog
        </Link>
      </header>
      <main className="p-8">{children}</main>
    </>
  );
}

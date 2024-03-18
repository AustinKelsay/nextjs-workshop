import Link from "next/link"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header className="bg-blue-500 text-white p-4">
        <Link className="text-2xl font-bold" href="/">
          My Simple Blog
        </Link>
      </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
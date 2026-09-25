import { Link } from "react-router";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-4">
          <h1 className="font-bold">Blueprint</h1>

          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-4 text-5xl font-bold">
          About Page
        </h1>

        <p className="text-gray-600">
          This page exists only to verify routing is working correctly.
        </p>
      </main>
    </div>
  );
}
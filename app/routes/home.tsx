import { Link } from "react-router";

export default function Home() {
  const features = [
    {
      id: 1,
      title: "Fast Development",
      description: "Build applications quickly with modern tooling."
    },
    {
      id: 2,
      title: "Responsive Design",
      description: "Works on desktop, tablet and mobile devices."
    },
    {
      id: 3,
      title: "Scalable Architecture",
      description: "Organized structure for growing projects."
    }
  ];

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

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="mb-4 text-5xl font-bold">
          Home Page
        </h1>

        <p className="mb-10 text-gray-600">
          React Router v7 test page.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-xl border bg-white p-6"
            >
              <h2 className="mb-2 text-xl font-semibold">
                {feature.title}
              </h2>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
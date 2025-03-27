

import { Link } from "@/navigation";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-6xl font-extrabold text-red-500 animate-pulse">
        404
      </h1>
      <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-lg text-gray-400 mt-2">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-red-500"
      >
        ⬅ Go Home
      </Link>
    </div>
  );
}

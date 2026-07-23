import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/30">
            <SearchX size={60} className="text-red-500" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-white tracking-widest">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-lg leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
          Please check the URL or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
          >
            <Home size={20} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 text-gray-300 hover:bg-gray-800 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Decorative Text */}
        <div className="mt-12 text-gray-600 text-sm">
          Error Code: <span className="text-red-400 font-semibold">404</span>
        </div>
      </div>
    </div>
  );
}

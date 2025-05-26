import React from "react";

export default function SketchDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex flex-col items-center justify-center px-6 text-white">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Welcome to Sketchify Studio
      </h1>
      <p className="max-w-xl text-center mb-10 text-lg drop-shadow-md">
        Transform your photos into stunning hand-drawn sketches with
        professional quality. Explore our tools, customize your style, and
        bring your imagination to life.
      </p>

      <button
        onClick={() => alert("Feature coming soon!")}
        className="bg-white text-pink-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
      >
        Get Started
      </button>

      <footer className="mt-20 text-sm opacity-80">
        © 2025 Sketchify. Crafted with ❤️ by Team Sketchify.
      </footer>
    </div>
  );
}

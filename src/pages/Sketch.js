import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaDownload } from 'react-icons/fa';
import axios from 'axios';

const Sketch = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  };

  const handleSubmit = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const sketchPath = response.data.sketch_path;
      setResult(`http://localhost:5000/${sketchPath}`);
    } catch (error) {
      console.error("Error generating sketch:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = result;
    link.download = "sketch.png";
    link.click();
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🎞️ Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* 🔲 Dark Glass Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10 backdrop-blur-[2px]"></div>

      {/* 📦 Main Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 flex items-center justify-center px-6 py-12 min-h-screen"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 w-full max-w-6xl p-10 shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300">
          <h1 className="text-4xl font-bold text-white text-center mb-10 tracking-tight drop-shadow-lg">Transform Your Photo Into Art</h1>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Original Image Upload */}
            <div className="flex-1 flex flex-col gap-4 items-center">
              <label className="w-full text-center cursor-pointer p-6 border border-white/30 rounded-2xl bg-white/10 hover:bg-white/20 transition duration-300 shadow-md">
                <FaUpload size={24} className="mx-auto mb-2" />
                <span className="text-white font-medium">Select Image</span>
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>

              {preview && (
                <div className="w-full">
                  <h2 className="text-center text-white/80 font-semibold mb-2">Original</h2>
                  <img src={preview} alt="Preview" className="w-full rounded-xl border border-white/20 shadow-lg" />
                </div>
              )}
            </div>

            {/* Result + Button */}
            <div className="flex-1 flex flex-col items-center gap-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition-all"
              >
                {loading ? "Processing..." : "Generate Sketch"}
              </button>

              {result && (
                <>
                  <div className="w-full">
                    <h2 className="text-center text-white/80 font-semibold mb-2">Sketch</h2>
                    <img src={result} alt="Sketch Result" className="w-full rounded-xl border border-white/20 shadow-lg" />
                  </div>

                  <button
                    onClick={handleDownload}
                    className="mt-4 bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-full flex items-center gap-2 font-medium transition-all"
                  >
                    <FaDownload /> Download Sketch
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sketch;

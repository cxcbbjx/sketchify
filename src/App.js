import React, { useState } from "react";
import "./App.css";

function App() {
  const apiBase = "https://sketchify-bwnx.onrender.com";

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [sketch, setSketch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bgType, setBgType] = useState("color"); // color or animated
  const [bgColor, setBgColor] = useState("#ffffff");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setSketch(null);
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch(`${apiBase}/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setSketch(`${apiBase}/${data.sketch_path}`);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to generate sketch.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!sketch) return;
    const link = document.createElement("a");
    link.href = sketch;
    link.download = "sketchify_output.png";
    link.click();
  };

  const changeBackground = (color) => {
    setBgType("color");
    setBgColor(color);
  };

  const setAnimatedBackground = () => {
    setBgType("animated");
  };

  return (
    <div className={`App ${bgType === "animated" ? "animated-bg" : ""}`} style={{ backgroundColor: bgType === "color" ? bgColor : undefined }}>
      <div className="glass-container">
        <h1>Sketchify ✏️</h1>

        <div className="background-buttons">
          <button onClick={() => changeBackground("#ffffff")}>White</button>
          <button onClick={() => changeBackground("#e0f7fa")}>Light Blue</button>
          <button onClick={() => changeBackground("#f9fbe7")}>Light Yellow</button>
          <button onClick={() => changeBackground("#fce4ec")}>Light Pink</button>
          <button onClick={setAnimatedBackground}>🌈 Animated</button>
        </div>

        <input type="file" accept="image/*" onChange={handleImageChange} />

        <button onClick={handleUpload} disabled={loading}>
          {loading ? "Generating..." : "Generate Sketch"}
        </button>

        {loading && <div className="loader"></div>}

        {(preview || sketch) && (
          <div className="image-row">
            {preview && (
              <div className="image-box">
                <h3>Original</h3>
                <img src={preview} alt="Original" className="preview-img" />
              </div>
            )}
            {sketch && (
              <div className="image-box">
                <h3>Sketch</h3>
                <img src={sketch} alt="Sketch" className="sketch-img" />
                <button className="download-btn" onClick={handleDownload}>
                  Download Sketch
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

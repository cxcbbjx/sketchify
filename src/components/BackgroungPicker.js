import React from "react";
import "./BackgroundPicker.css";

const colors = ["#ffffff", "#f0f0f0", "#fffbf0", "#e0f7fa", "#1e1e1e"];

function BackgroundPicker() {
  const handleColorChange = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="background-picker">
      <span>🎨 Background:</span>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          className="color-btn"
          onClick={() => handleColorChange(color)}
        />
      ))}
    </div>
  );
}

export default BackgroundPicker;

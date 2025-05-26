import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">About Sketchify</h1>
        <p className="about-subtitle">
          We're passionate about blending technology and art to bring your photos to life.
        </p>

        <div className="about-content">
          <p>
            Sketchify was born from a simple idea: turn memories into minimalist, hand-drawn artwork. 
            Using advanced AI models and thoughtful design, we've created a platform that lets anyone 
            transform their photos into beautiful sketches in seconds.
          </p>
          <p>
            Whether you're designing a gift, enhancing a profile, or preserving a moment — we believe 
            creativity should be accessible, fast, and stunning.
          </p>
          <p>
            Built by dreamers. Powered by code. Inspired by you.
          </p>
        </div>

        <div className="about-footer">
          <p>Made with ❤️ by Shivang</p>
        </div>
      </div>
    </div>
  );
}

export default About;
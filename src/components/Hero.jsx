
import React from "react";
import { ArrowDown, Download } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Side: Introduction */}
        <div className="hero-content">
          <p className="hero-tag">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Sidhant Kumar</span>
          </h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            I'm a BCA student passionate about building modern,
            responsive web applications. I work with React,
            JavaScript, Node.js and Express.js, and I'm exploring
            the world of AI development.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View My Projects <ArrowDown size={18} />
            </a>

            <a
              href="/Sidhant.pdf"
              download
              className="btn-secondary"
            >
              Download Resume <Download size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/sidhantmod-1025"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sidhant-kumar-0aa71940a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side: Profile Photo */}
        <div className="hero-image">
          <div className="hero-image-glow"></div>

          <img
            src="/profile/sidPic.png"
            alt="Sidhant Kumar"
            onError={(e) => {
               console.log("Image load nahi hui:", e.currentTarget.src);
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="hero-badge">
            <span className="status-dot"></span>
            Learning & Building
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;

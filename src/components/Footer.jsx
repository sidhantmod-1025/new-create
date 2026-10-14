import React from "react";
import "./Footer.css";

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          Sidhant<span>.</span>
        </a>

        <p>
          Building modern web experiences with code and creativity.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
        >
          Back to Top ↑
        </button>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Sidhant Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
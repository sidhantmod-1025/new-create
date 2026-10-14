import React, { useState } from "react";
import { Send } from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
  e.preventDefault();

  setStatus("Sending message...");

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Something went wrong.");
    }

    setStatus(result.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    setStatus(
      "Unable to send message. Please check whether the backend is running."
    );
  }
}

  return (
    <section className="contact section" id="contact">
      <div className="section-heading">
        <p className="section-tag">LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
        <p>
          Have a project or opportunity in mind? Let's talk!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together</h3>

          <p>
            I'm interested in frontend development, full stack
            development, internships and AI projects.
          </p>

         <div className="contact-detail">
  <span>✉️</span>
  <span>Feel free to connect with me online.</span>
</div>

<div className="contact-detail">
  <span>📍</span>
  <span>Faridabad, Haryana, India</span>
</div>

         <div className="contact-socials">
  <a
    href="https://github.com/sidhantmod-1025"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/sidhant-kumar-0aa71940a/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>
</div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message <Send size={17} />
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
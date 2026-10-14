import React from "react";
import { Code2, GraduationCap, Rocket } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <p className="section-tag">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p>A little introduction about who I am and what I do.</p>
      </div>

      <div className="about-container">
        <div className="about-card">
          <div className="about-icon">
            <GraduationCap size={28} />
          </div>
          <h3>My Education</h3>
          <p>
            I'm pursuing a Bachelor of Computer Applications (BCA)
            and continuously improving my programming and
            problem-solving skills.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">
            <Code2 size={28} />
          </div>
          <h3>My Development Journey</h3>
          <p>
            I enjoy building web applications using HTML, CSS,
            JavaScript and React. I'm also learning backend
            development with Node.js and Express.js.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">
            <Rocket size={28} />
          </div>
          <h3>My Goal</h3>
          <p>
            My goal is to become a Full Stack AI Developer by
            combining web development with artificial intelligence
            and building useful real-world projects.
          </p>
        </div>
      </div>

      <div className="about-bottom">
        <h3>Always Learning, Always Building 🚀</h3>
        <p>
          I believe in learning by doing, creating projects,
          and improving my skills one step at a time.
        </p>
      </div>
    </section>
  );
}

export default About;
import React from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Calculator",
    category: "Frontend Development",
    description:
      "A responsive calculator built to perform basic mathematical operations with a clean user interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sidhantmod-1025",
    demo: "",
  },
  {
    number: "02",
    title: "Student Portal",
    category: "Web Development",
    description:
      "A student portal interface designed to organize student-related information and provide easy navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sidhantmod-1025",
    demo: "",
  },
  {
    number: "03",
    title: "Seva Kendra Management System",
    category: "Web Application",
    description:
      "A government service portal concept for applying for services, generating tokens and tracking application status.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sidhantmod-1025",
    demo: "",
  },
  {
    number: "04",
    title: "Gym Website",
    category: "React Development",
    description:
      "A modern gym website designed to present fitness services with a responsive layout and engaging user interface.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/sidhantmod-1025/gym_page",
    demo: "",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <p className="section-tag">MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>
        <p>
          Some projects I've built while learning and improving my skills.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
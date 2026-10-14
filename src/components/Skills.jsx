import React from "react";
import {
  Code2,
  Globe,
  Database,
  Brain,
  Wrench,
} from "lucide-react";
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <Globe size={25} />,
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    icon: <Database size={25} />,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Programming",
    icon: <Code2 size={25} />,
    skills: ["Python", "C", "C++ Basics"],
  },
  {
    title: "AI & Tools",
    icon: <Brain size={25} />,
    skills: ["LLMs", "LangChain Basics", "Git", "GitHub"],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <p className="section-tag">WHAT I WORK WITH</p>
        <h2>My <span>Skills</span></h2>
        <p>
          Technologies I'm learning and using to build projects.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="skill-card-heading">
              <div className="skill-icon">{group.icon}</div>
              <h3>{group.title}</h3>
            </div>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-note">
        <Wrench size={20} />
        <p>
          Currently improving my backend development and AI skills
          through hands-on practice and projects.
        </p>
      </div>
    </section>
  );
}

export default Skills;
import React, { useState } from 'react'
import './App.css'

function Projects() {
  const projects = [
    {
      name: "Clone-1",
      description: "My GTA6 homepage clone project.",
      link: "https://clone-1.onrender.com"
    },
    {
      name: "Todo App",
      description: "A simple to-do list app with add/edit/delete.",
      link: "https://todo-app.onrender.com"
    }
    // You can keep adding more projects here
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Projects

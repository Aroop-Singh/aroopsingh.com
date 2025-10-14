import React from 'react'
import './App.css'

function Projects() {
  const projects = [
    {
      name: "Clone-1",
      description: "Clone of allen.in",
      link: "https://clone-1.aroopsingh.com"
    },
    {
      name: "Todo App",
      description: "A simple to-do list app with add/edit/delete.",
      link: "https://clone-1-9gr1.onrender.com"
    },
    {
      name: "Linkdin",
      description: "See Linkdin stuffs here",
      link: "https://www.linkedin.com/in/aroop-prateek-singh/"
    },
    {
      name: "Github",
      description: "See github stuffs here",
      link: "https://github.com/Aroop-Singh"
    }
  ];

  // First 2 projects
  const firstTwoProjects = projects.slice(0, 2);

  // Last 2 projects
  const lastTwoProjects = projects.slice(-2);

  return (
    <div className="projects">
      <h1 style={{ color: 'white' }}>Welcome to Aroop's site</h1>
      
      {/* Projects Section */}
      <h2 style={{ color: 'white' }}>Projects</h2>
      <div className="project-list">
        {firstTwoProjects.map((p, index) => (
          <div className="project-card" key={index}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>

      {/* Links Section */}
      <h2 style={{ color: 'white' }}>Links</h2>
      <div className="project-list">
        {lastTwoProjects.map((q, index) => (
          <div className="project-card" key={index}>
            <h3>{q.name}</h3>
            <p>{q.description}</p>
            <a href={q.link} target="_blank" rel="noopener noreferrer">
              Click here
            </a>
          </div>
        ))}
      </div>

      <div style={{backgroundColor: "white", color: 'black', borderRadius: "15px", padding: "0.5%", marginTop: "2%"}}>
        <h2 style={{ color: 'black' }}>Some upcoming shits in my head</h2>
        <h3 style={{ color: 'black' }}>#1 pehle toh bc todo ka scene set krna h</h3>
        <p style={{marginTop: "-20px", color: "grey"}}>set smbh h bs todos ka mapping kr se save functionality add krte pelna h, pta nhi saving me jwt se he set kr deta hy baki ka pta nhi. </p>
        <h3 style={{ color: 'black' }}>#2 fir ye slider meme template</h3>
        <p style={{marginTop: "-20px", color: "grey"}}>ishka toh bhai bohot options h bohot kaam bhi h, pehle google login integrate krna h template creation ke baadh, fir shared links ka bhi scene. Pta nhi ye pr kaam ka project </p>

      </div>
      


    </div>
  );
}

export default Projects;

import React from 'react'
import './Project.css'

function Project() {
  const projects = [
    {
      title: "Food delivery",
      image: "./image/food.jpg",
      description: "I created this food delivery site by using MERN stack.",
      demo: "https://food-delivery-frontend-jttp.onrender.com/",
      source: "https://github.com/julikray/food-delivery",
    },
    {
      title: "Tesla-landing-page",
      image: "./image/tesla.jpg",
      description: "I created this food delivery site by using Reactjs and T.",
      demo: "https://food-delivery-frontend-jttp.onrender.com/",
      source: "https://github.com/julikray/food-delivery",
    },
    {
      title: "Youtube-clone",
      image: "./image/ytube.jpg",
      description: "I created this YouTube clone in ReactJS using YouTube API v3.",
      demo: "https://julikray.github.io/Youtube-clone/",
      source: "https://github.com/julikray/Youtube-clone",
    },
    {
      title: "Tic-tac-toe",
      image: "./image/tictactoe.jpg",
      description: "The create a web-based Tic-Tac-Toe game using HTML, CSS, and JavaScript for a fun and interactive two-player gaming experience.",
      demo: "https://julikray.github.io/Tic-tac-toe/",
      source: "https://github.com/julikray/Tic-tac-toe",
    },
    
    {
      title: "Analogclock",
      image: "./image/analog.jpg",
      description: "The Create a dynamic analog clock using HTML, CSS, and JavaScript for a visually engaging time-telling interface on webpages.",
      demo: "https://julikray.github.io/Analogclock/",
      source: "https://github.com/julikray/Analogclock",
    },
    {
      title: "Calculator",
      image: "./image/Calculator.jpg",
      description: "The create a responsive calculator web application using HTML, CSS, and JavaScript for basic arithmetic calculations and user-friendly interface.",
      demo: "https://julikray.github.io/Scientific-calculator/",
      source: "https://github.com/julikray/Scientific-calculator",
    },
    {
      title: "Digital-clock",
      image: "./image/Digitalclock.jpg",
      description: "The create a digital clock using HTML, CSS, and JavaScript with both dark and light modes for user-friendly time display.",
      demo: "https://julikray.github.io/Digital-clock/",
      source: "https://github.com/julikray/Digital-clock",
    },
   
    
    
  ];

  return (
    <div className="heading" id="project">
      <h1 >Project</h1>
      <div className="All">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            
            <h5 className="project-title">{project.title}</h5>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-demo">
                Live Demo
              </a>
              <a href={project.source} target="_blank" rel="noopener noreferrer" className="project-source">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Project
// components/Projects.js

import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1:The website fetches a daily quote from a public quote API and presents it in a user-friendly manner.</p>
          <a href="https://65c1e9e7ccbef153940f2421--chipper-seahorse-fab0bb.netlify.app/">View Project</a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2:  
Power Fit Gym offers users a comprehensive fitness platform with personalized profiles, flexible plan selection, and access to instructor profiles for informed choices.</p>
          <a href="https://65b676634d919a70c4bf53ae--vocal-fenglisu-dcc1e1.netlify.app/">View Project</a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;

// components/AboutMe.js

import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="mb-8">
          <p className="mb-4">
            Hi there! I'm Irene Gitau, a software enthusiast currently learning data structures and algorithms to improve my problem-solving abilities and enhance my understanding of software development principles. I'm passionate about collaborating on open-source projects and contributing to the tech community while learning from experienced developers.
          </p>
          <p className="mb-4">
            Feel free to ask me about my journey into software development, my favorite programming languages, or any tech-related questions you have!
          </p>
          <p className="fun-fact">
            Fun fact: I'm a Beyoncé stan and a chess lover!
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Technology Proficiency Skills</h3>
          <ul className="list-disc pl-4">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Data Structures & Algorithms</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          <p>Bachelor of Business and Information Technology - Strathmore University</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

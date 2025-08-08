import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="experienceTitle">My Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Research Assistant – Latent Aspect Detection (LADy Framework)</h3>
          <p>School of Computer Science, University of Windsor</p>
          <p>April 2025 - Present</p>
        </div>
        <div className="timeline-item">
          <h3>Artificial Intelligence Intern</h3>
          <p>Glendor Inc, Draper, UT, United States</p>
          <p>January 2025 – April 2025</p>
        </div>
        <div className="timeline-item">
          <h3>Teaching Assistant</h3>
          <p>School of Computer Science, University of Windsor</p>
          <p>September 2024 – April, 2025</p>
        </div>
        <div className="timeline-item">
          <h3>Machine Learning Engineer Intern</h3>
          <p>AlModels Tech Inc, New Westminster, BC, Canada</p>
          <p>February 2025 – April, 2025</p>
        </div>
        <div className="timeline-item">
          <h3>Database Management Specialist Intern</h3>
          <p>Digital Human Library, Remote</p>
          <p>January 2024 – March 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

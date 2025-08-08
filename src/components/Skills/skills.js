import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript, as well as design software such as Adobe
        Photoshop and Illustrator.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Programming Languages</h2>
            <p>C, Java, Python, JavaScript, HTML/CSS, SQL (Postgres)</p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Frameworks & Libraries</h2>
            <p>React, Django, Flask, scikit-learn, pandas, NumPy, Matplotlib</p>
          </div>
        </div>
        <div className="skillBar">
          <div className="skillBarText">
            <h2>Tools & Methodologies</h2>
            <p>
              Jira, GitHub, MS Office, MS Visio, Docker, Scrum, Figma,
              OpenProject, PyTorch, TensorFlow, OpenCV, scikit-learn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

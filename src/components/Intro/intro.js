import React from 'react';
import './intro.css';
import bg from '../../assests/image.webp';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Karanveer Sidhu</span>
          <br />
          AI/ML Researcher & Software Engineer
        </span>
        <p className="introPara">
          Experienced in developing interactive dashboards and analytics tools
          using SQL, Power BI, Tableau, and Python to extract actionable
          insights from complex datasets. Skilled in data storytelling and
          visualization to support decision-making in both academic and
          Al-driven projects. Proven ability to deliver results in hybrid
          environments, with a strong foundation in data analytics, reporting,
          and full-stack development.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">Hire Me</button>
        </Link>
      </div>
      <div className="image-container">
        <img src={bg} alt="Profile" className="bg" />
      </div>
    </section>
  );
};

export default Intro;

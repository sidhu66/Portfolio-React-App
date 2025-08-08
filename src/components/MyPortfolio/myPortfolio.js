import React from 'react';
import './myPortfolio.css';
import Portfolio1 from '../../assests/Portfolio1.webp';
import digitalHumanLibrary from '../../assests/digitalHumanLibrary.png';
// import lad from '../../assests/lad.png';
// import glendor from '../../assests/glendor.png';

const MyPortfolio = () => {
  return (
    <section id="myPortfolio">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skills and
        experience to help businesses achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <div className="project">
          <img src={Portfolio1} alt="E-commerce Website" className="worksImg" />
          <h3>E-commerce Website</h3>
          <p>
            A full-stack e-commerce application with a React frontend and a
            Django backend, using PostgreSQL for the database.
          </p>
        </div>
        <div className="project">
          <img
            src={digitalHumanLibrary}
            alt="NASA Hackathon Project"
            className="worksImg"
          />
          <h3>NASA Hackathon Project</h3>
          <p>
            A dynamic crop ranking system to predict harvest yields based on
            location-specific factors, using Java, JavaScript, and Google Maps.
          </p>
        </div>
        
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default MyPortfolio;

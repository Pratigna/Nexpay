import { FaDesktop, FaPlug, FaCode, FaArrowRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import React from 'react';
import './about.css';
import tryImage from "../../assets/tryImage.png";


const aboutData = [
    {
      icon: <FaDesktop />,
      title: 'Interface',
      info: 'Our platform offers an intuitive and user-friendly interface to ensure a seamless experience.',
    },
    {
      icon: <FaPlug />,
      title: 'Integration',
      info: 'Easily integrate with various systems and tools to streamline your processes.',
    },
    {
      icon: <FaCode />,
      title: 'API Reference',
      info: 'Access comprehensive API documentation to build and integrate with our platform effectively.',
    },
];

const About = () => {
  return (
    <div className="about-container section__padding "  id="integration">
      <h1 className="gradient__text about-heading">Nexpay is built</h1>
      <h1 className="about-subheading gradient__text"><FaChevronLeft className='bracket' />for developers by developers <FaChevronRight className='bracket' /></h1>
      <div className="about-cards">
        {aboutData.map((item, index) => (
          <div key={index} className="about-card">
            <div className="about-icon">{item.icon}</div>
            <div className="about-info">
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </div>
            {/*<p><a>View Docs </a></p>*/}
          </div>
        ))}
      </div>
      <div className="try-section">
        <h2 className="try-title">Try it out for yourself  <FaArrowRight className="rotated-arrow" /></h2>
        

        <div className="try-image-container">
          <img src={tryImage} alt="Try it out" className="try-image" />
          <button className="try-button">Take me to the code</button>
        </div>
      </div>  
    </div>
  );
};

export default About;

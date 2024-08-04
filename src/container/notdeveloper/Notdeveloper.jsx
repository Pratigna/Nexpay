// src/components/NotDeveloper/NotDeveloper.jsx
import React from 'react';
import './notdeveloper.css'; // Import the CSS file for styling
import exampleImage from '../../assets/tryImage.png'; // Replace with your actual image


const Notdeveloper = () => {
  return (
    <div className="not-developer-container section__padding">
      <h3 className="not-developer-subheading">what html?</h3>
      {/*<h1 className="not-developer-heading gradient__text">Not a developer?</h1>*/}
      <h2 className="not-developer-heading gradient__text">Our No-Code products have you covered.</h2>
      
      <div className="not-developer-content">
        <div className="not-developer-steps">
          {/*<h4> 1. Download Package :  <a>npm i nexpay</a></h4>*/}
          <h4> 2. Put code in e-commerce</h4>
          <h4> 3. Run code</h4>
        </div>
        
        <div className="not-developer-image">
          <img src={exampleImage} alt="Example" />
        </div>
      </div>
    </div>
  );
};

export default Notdeveloper;

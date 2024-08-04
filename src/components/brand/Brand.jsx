// import React from "react";

import "./brand.css";
import {  slack, dropbox, shopify } from "./import.js";
import { FaShoppingCart } from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';

const Brand = () => {
  return (
    <div className="npay__brand section__padding">
      <div>
        <GiRunningShoe className="icon"/>
        <h1>Footfolio</h1>
      </div>
      <div>
        <FaShoppingCart  className="icon"/>
        <h1> Bharat Mart</h1>
      </div>
      {/*<div>
        <img src={slack} alt="slack" />
      </div>
      
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>*/}
    </div>
  );
};

export default Brand;

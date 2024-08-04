// import React from 'react';

import {
  Footer,
  Blog,
  Possibility,
  Services,
  Whatnpay,
  Header,
  About,
  Notdeveloper,
  Contact 
} from "./container";
import { Navbar, Brand, CTA } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatnpay />
      <Services />
      <Possibility />
      <CTA />
      <About />
      <Notdeveloper />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

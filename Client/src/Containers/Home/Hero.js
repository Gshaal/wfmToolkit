import React from "react";
import { Button } from "reactstrap";
import "./style.css";
const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1 className= "home-logo">WFM Toolkit</h1>
          <h3>Collaborative | Real-Time | Simple</h3>
          <Button href="#about" className="btn-global">
            Read More
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;

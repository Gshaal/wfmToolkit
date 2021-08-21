import React, { Component } from "react";
import "./style.css";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import NavbarMain from './Navbar'
class Home extends Component {
  render() {
    return (
      <div id='home'>
        <NavbarMain {...this.props} />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;

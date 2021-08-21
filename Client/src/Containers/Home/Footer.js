import React, { Component } from "react";
import { Container } from "reactstrap";
import "./style.css";


class Footer extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="footerBody">
        <Container>
          <header className="headerTitle text-center">
          </header>
          <footer className="svg-group text-center">
            <br />
            <p>Copyright 2021 | WFM Toolkit ©</p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./style.css";
import CallRoundedIcon from '@material-ui/icons/CallRounded';
import PinDropRoundedIcon from '@material-ui/icons/PinDropRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

class Contact extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="contactBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Drop Us a Line!</h1>
          </header>
          <section className="svg-group text-center">
            <Row>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <CallRoundedIcon fontSize='large' />
                  <p>1-800-WFM-469</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <PinDropRoundedIcon fontSize='large' />
                  <p>Dublin, Ireland</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                  <EmailRoundedIcon fontSize='large' />
                  <p>wfmtoolkit@admin.com</p>
                </div>
              </Col>
            </Row>
          </section>
          <hr />
          <section className="msg text-center">
            <form action="">
              <Row>
                <Col sm="6">
                  <input
                    type="text"
                    name="Name"
                    id="reviewer-name"
                    placeholder="Your Name"
                    required
                  />
                  <br />
                  <input
                    type="email"
                    name="Email"
                    id="reviewer-email"
                    placeholder="Your email"
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    name="Message"
                    id="reviewer-message"
                    rows="4"
                    placeholder="Your Message"
                  />
                  <Button outline color="light" className="float-left">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </form>
          </section>
        </Container>
      </div>
    );
  }
}

export default Contact;

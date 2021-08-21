import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';


class Services extends Component {
  render() {
    return (
      <div className="wrapped-services">
        <div className="subComponent" id="servicesBody">
          <Container>
            <section className="svg-group text-center">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <MonetizationOnRoundedIcon fontSize="large" width="50" height="55" strokeWidth="1" style={{color: 'green'}}/>
                  
                    <h4>Freemium</h4>
                    <p>Features:</p>
                    <ul>
                      <li>Up to 10 Users Only.</li>
                      <li>Limited Shift Options (Up to 3 Options)</li>
                      <li>Cannot Export Data</li>
                    </ul>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <MonetizationOnRoundedIcon fontSize="large" width="55" height="55" strokeWidth="1" style={{color: 'green'}}/>
                    <MonetizationOnRoundedIcon fontSize="large" width="50" height="55" strokeWidth="1" style={{color: 'green'}}/>
                    <h3>Premium</h3>
                    <p>Features:</p>
                    <ul>
                      <li>Up to 50 Users.</li>
                      <li>Up to 10 Shift Options</li>
                      <li>Up to 200 Rows</li>
                    </ul>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <MonetizationOnRoundedIcon fontSize="large" width="55" height="55" strokeWidth="1" style={{color: 'green'}}/>
                    <MonetizationOnRoundedIcon fontSize="large" width="55" height="55" strokeWidth="1" style={{color: 'green'}}/>
                    <MonetizationOnRoundedIcon fontSize="large" width="55" height="55" strokeWidth="1" style={{color: 'green'}}/>
                    <h2>VIP</h2>
                    <p>Features:</p>
                    <ul>
                      <li>Up to 500 Users.</li>
                      <li>Up to 15 Shift Options</li>
                      <li>Up to 2K Rows</li>
                    </ul>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <MonetizationOnRoundedIcon fontSize="large" width="55" height="55" strokeWidth="1" style={{color: 'green'}}/>
                    <MonetizationOnRoundedIcon fontSize="large" width="55" height="55" strokeWidth="1" style={{color: 'green'}}/>
                    <MonetizationOnRoundedIcon fontSize="large" width="55" height="55" strokeWidth="1" style={{color: 'green'}}/>
                    <MonetizationOnRoundedIcon fontSize="large" width="55" height="55" strokeWidth="1" style={{color: 'green'}}/>
                    <h1>Corporate</h1>
                    <p>Features:</p>
                    <ul>
                      <li>500+ Users.</li>
                      <li>Unlimited Shift Option</li>
                      <li>Unlimited Rows</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default Services;

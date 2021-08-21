import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./style.css";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import GroupIcon from '@material-ui/icons/Group';
class About extends Component {
  render() {
    return (
      <div id='about'>
     

        <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>What We Do?</h1>
            </header>
            <section className="svg-group text-center subComponent">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <CalendarTodayIcon fontSize="large"  width="48" height="48" strokeWidth="1" />
                    <p>Manage Roasters & Schedules</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <AssignmentIcon fontSize="large" width="48" height="48" strokeWidth="1" />
                    <p>Assign Shifts</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <FlightTakeoffIcon  fontSize="large"  width="48" height="48" strokeWidth="1" />
                    <p>Request & Manage Personal Time Off</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <GroupIcon fontSize="large"  width="48" height="48" strokeWidth="1" />
                    <p>Manage Teams</p>
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

export default About;

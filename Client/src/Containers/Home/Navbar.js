import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import "./style.css";

class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar
          // color="faded"
          light
          expand="md"
          fixed={`top`}
          className="mr-auto App-header" 
        >
          <Container>
            <NavbarBrand href="#">{"{WFM Toolkit}"}</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#servicesBody">Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contactBody">Contact</NavLink>
                </NavItem>
                <Button className="btn-global" onClick={()=> this.props.history.push("/login")}>Login</Button>{" "}
                
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;

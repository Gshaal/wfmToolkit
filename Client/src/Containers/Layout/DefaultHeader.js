import React, { Component, Suspense} from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText 
} from "reactstrap";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import BeachAccessRoundedIcon from '@material-ui/icons/BeachAccessRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import Logo from '../../Assests/logo.gif';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../Store/actions/index";


const Notification = React.lazy(() => import('./Notification'))

 class DefaultHeader extends Component {
  state = {
    isOpen: false,
    loading:true
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div>
      <Navbar  light expand="md">
        <NavbarBrand href="#">{"{WFM Toolkit}"}</NavbarBrand>
        <NavbarToggler onClick={()=>this.toggle()} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto App-header" navbar>
            <NavItem >
              <NavLink to="/home"  exact={true} className="nav-link"  activeClassName="activeLink"> <HomeRoundedIcon style={{color:"#9A7AA0"}}  /> Home </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/scheduler" exact={true} className="nav-link" activeClassName="activeLink">  <EventNoteRoundedIcon style={{color:"#9A7AA0"}}  /> Scheduler </NavLink>
            </NavItem>
            <NavItem className="navbar-logo">
            <img className="logo-img" alt="W" src={Logo} width="50" height="50" />
            </NavItem>
            <NavItem>
              <NavLink to="/holiday/me" exact={true} className="nav-link" activeClassName="activeLink"> <BeachAccessRoundedIcon style={{color:"#9A7AA0"}}  />Holiday</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/setting" exact={true} className="nav-link" activeClassName="activeLink"> <SettingsRoundedIcon style={{color:"#9A7AA0"}}  />Settings</NavLink>
            </NavItem>
          </Nav>
          <Suspense fallback={this.loading()}>
          <Notification />
          </Suspense>
          <NavbarText onClick={(e) => this.props.onLogout()} style={{cursor:"pointer"}} title="logout" className="nav-link" ><PowerSettingsNewRoundedIcon style={{color:"#9A7AA0"}}  /></NavbarText>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.LogOut()),
  };
};

export default connect(null, mapDispatchToProps)(DefaultHeader);

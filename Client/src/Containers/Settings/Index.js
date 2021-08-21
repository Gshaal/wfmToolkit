import React, { Component } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import GroupIcon from "@material-ui/icons/Group";
import classnames from "classnames";
import { connect } from "react-redux";
import Axios from "../../hoc/Axios";
import Tab1 from './Tab1'


class Index extends Component {
  state = {
    activeTab: "1",
    wfm_teams: [],
  };
  async componentDidMount() {

    try{
        await this.teams()

    }catch(err){
        console.log(err);
    }
      
  }

  teams = ()=> {
    Axios.post("/schduler/wfm/teams", null, {
        headers: {
          Authorization: "Bearer " + this.props.token,
        },
      })
        .then((res) => {
          console.log(res.data.results);
          this.setState(prev => {
            return {
              ...prev,
              wfm_teams: res.data.results
            }
          })
        })
        .catch((err) => this.setState({ error: true }));
  }

  addTeam = (name)=> {
    const payload = {
        name:name
    } 
    Axios.post("/settings/add-team", payload, {
        headers: {
          Authorization: "Bearer " + this.props.token,
        },
      })
        .then((res) => {
          console.log(res.data.results);
          this.setState(prev => {
            return {
              ...prev,
              wfm_teams: res.data.results
            }
          })
        })
        .catch((err) => this.setState({ error: true }));
  }
  
  toggle = (tab) => {
    if (this.state.activeTab !== tab)
      this.setState((prev) => {
        return { ...prev, activeTab: tab };
      });
  };

  render() {
    return (
      <Container style={{ paddingTop: "2%" }}>
        <Row>
          <Nav tabs className="card-header text-center">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                <GroupIcon /> Teams
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1"><Tab1 add={(name)=> this.addTeam(name)} teams={this.state.wfm_teams} /></TabPane>
          </TabContent>
        </Row>
      </Container>
    );
  }
}


let mapStateToProps = (state) => {
    return {
      token: state.auth.token,
    };
  };
  
  export default connect(mapStateToProps, null)(Index);
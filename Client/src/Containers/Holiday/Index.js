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
import { connect } from "react-redux";
import Axios from "../../hoc/Axios";
import classnames from "classnames";
import ReceiptIcon from "@material-ui/icons/Receipt";
import HistoryIcon from "@material-ui/icons/History";
import SendIcon from "@material-ui/icons/Send";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import { toast } from "react-toastify";
import "./style.css";

class Index extends Component {
  state = {
    activeTab: "1",
    wfm_managers: [],
    pending: [],
    history:[],
    email: null,
    date_from: null,
    date_to: null,
    manager: null,
    comment: null,
  };

  async componentDidMount() {
    try {
      await this.getTeams();
      await this.fetchPendingRequests();
      await this.fetchHistory();
    } catch (err) {
      console.log(err);
    }
  }

  getTeams = () => {
    Axios.post("/holiday/wfm-managers", null, {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        this.setState((prev) => {
          return {
            ...prev,
            wfm_managers: res.data.results,
          };
        });
      })
      .catch((err) => this.setState({ error: true }));
  };


  fetchPendingRequests = ()=> {
    Axios.post("/holiday/fetch-pending-pto", null, {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        this.setState((prev) => {
          return {
            ...prev,
            pending: res.data.results,
          };
        });
      })
      .catch((err) => this.setState({ error: true }));
  }


  fetchHistory = ()=> {
    Axios.post("/holiday/history", null, {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        console.log(res);
        this.setState((prev) => {
          return {
            ...prev,
            history: res.data.results,
          };
        });
      })
      .catch((err) => this.setState({ error: true }));
  }

  submitHolidayRequest = (dateFrom, dateTo, manager, comment) => {
    const payload = {
      dateFrom: dateFrom,
      dateTo: dateTo,
      manager: manager,
      comment: comment,
    };

    Axios.post("/holiday/submit-pto", payload, {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        toast.success("Request was submittted successfully ", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => this.setState({ error: true }));
  };


  handleRequests = (id, approved,dateFrom,dateTo,user_id)=> {

    const payload = {
      id:id,
      approved:approved,
      dateFrom:dateFrom,
      dateTo:dateTo,
      user_id:user_id
    }
    Axios.post("/holiday/action", payload, {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
    .then(res=> {
      toast.success("Request was actioned successfully ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      this.setState(prev => {
        return {
          ...prev,
          pending: res.data.results
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
                <ReceiptIcon /> Action Requests
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                <HistoryIcon /> History
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                <SendIcon /> Request Time off
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Tab1 data={this.state.pending} action={(id,approved,dateFrom, dateTo,user_id)=> this.handleRequests(id,approved,dateFrom, dateTo,user_id)} />
            </TabPane>
            <TabPane tabId="2" >
              <Tab2 data={this.state.history} />
            </TabPane>
            <TabPane tabId="3">
              <Tab3
                wfm_managers={this.state.wfm_managers}
                submit={this.submitHolidayRequest}
              />
            </TabPane>
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

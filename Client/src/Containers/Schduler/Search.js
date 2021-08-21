import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { connect } from "react-redux";
import Axios from '../../hoc/Axios'
import { Multiselect } from "react-widgets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import "./style.css";
class Search extends Component {

  state = {
    wfm_teams: [],
    selected_teams: [],
    start:new Date(moment().startOf('month')),
    end:new Date(moment().endOf('month')),

  }

  componentDidMount(){
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

  onChange = (dates) => {

   
    const [start, end] = dates;
    console.log(dates);
    
    this.setState((prev)=>{
        return{
            ...prev,
            start:start,
            end:end
        }
    })
    console.log(start);
    console.log(end);
  };

  onSearch = ()=> {
    const payload = {
      team: this.state.selected_teams,
      start_date: moment(this.state.start).format('MM/DD/YYYY'),
      end_date: moment(this.state.end).format('MM/DD/YYYY')
    }

    const queryString = `team=${encodeURIComponent(payload.team)}&start_date=${payload.start_date}&end_date=${payload.end_date}`
    console.log(queryString);
    this.props.history.push("scheduler/search?" + queryString);
  }

  render() {
   console.log(this.state)
    return (
      <div className="align-items-center search-container">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <Card>
                <CardHeader></CardHeader>
                <CardBody className="text-center">
                  <Row>
                    <Col xs="12">
                      <p className="text-center txt">Date Range</p>
                      <DatePicker
                       startDate={this.state.start}
                       endDate={this.state.end}
                       selected={this.state.start}
                       onChange={this.onChange}
                       selectsRange={true}
                       isClearable={true}
                       inline
                      />
                      <br/>
                      <Form inline>
                       <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>Team</InputGroupText>
                        </InputGroupAddon>
                        <Multiselect
                          textField="text"
                          busy={this.state.wfm_teams.length === 0}
                          data={this.state.wfm_teams}
                          dataKey="value"
                          className="select-team"
                          onChange={(val)=>{
                            console.log(val[0].text);
                            this.setState({selected_teams:val.map((item=> item.text))})
                          }}
                        />
                      </InputGroup>
                      </Form>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                <Row>
                    <Button onClick={this.onSearch} block className="btn-global" disabled={this.state.selected_teams.length === 0}>
                      Search
                    </Button>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, null)(Search);

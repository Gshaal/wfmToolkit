import React, { Component, Fragment } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import Axios from "../../hoc/Axios";
import openSocket from "socket.io-client";
import ReactTooltip from "react-tooltip";
import {
  Table,
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Spinner,
  Input,
} from "reactstrap";
import "./style.css";
import moment from "moment";
import HelpIcon from "@material-ui/icons/Help";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
class Calender extends Component {
  state = {
    loading: true,
    calender: [],
    scheduler: [],
    shifts: [],
    edit: false,
    selectedCell: null,
  };

  componentDidMount() {
    const query = queryString.parse(this.props.location.search);
    const payload = {
      ...query,
      team: query.team.split(","),
    };
    Axios.post("/schduler/search", payload, {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        console.log(res.data);
        this.setState((prev) => {
          return {
            ...prev,
            calender: res.data.calender,
            scheduler: res.data.scheduler,
            shifts: res.data.shifts,
            loading: false,
          };
        });
      })
      .catch((err) => this.setState({ error: true }));

    const socket = openSocket("https://wfm-toolkit.herokuapp.com");
    socket.on("update-cell", (data) => {
      console.log("live data in...");
      this.updateCell(data);
    });

    window.addEventListener("keyup", (e) => {
      console.log(e);
      if (e.code === "Escape") {
        this.setState((prev) => {
          return {
            ...prev,
            edit: false,
            selectedCell: null,
          };
        });
      }
    });
  }

  setEdit = (cell) => {
    this.setState((prev) => {
      return {
        ...prev,
        edit: true,
        selectedCell: cell,
      };
    });
  };

  handleUpdate = (event) => {
    const payload = {
      shift_id: event.target.value,
      scheduler_id: this.state.selectedCell,
    };

    if (payload.shift_id === "custom") {
      alert();
    } else {
      Axios.post("/schduler/update", payload, {
        headers: {
          Authorization: "Bearer " + this.props.token,
        },
      })
        .then((res) => {
          this.updateCell(res.data.results);
        })
        .catch((err) => this.setState({ error: true }));
    }
  };

  updateCell = (data) => {
    let cellIndex = this.state.scheduler.findIndex(
      (item) => item.scheduler_id === data[0].scheduler_id
    );
    if (cellIndex > -1) {
      let cloneData = [...this.state.scheduler];
      cloneData[cellIndex] = data[0];

      console.log("updating cell...");

      this.setState((prev) => {
        return {
          ...prev,
          scheduler: cloneData,
          edit: false,
          selectedCell: null,
        };
      });
    }
  };

  populateEditMenu = (selected) => (
    <Input
      type="select"
      className="shift-menu"
      onKeyUp={(e) => console.log(e)}
      onChange={(e) => this.handleUpdate(e)}
    >
      <option defaultValue={selected}>{selected}</option>
      {this.state.shifts.map(
        (item) =>
          item.shift_name !== selected && (
            <option key={item.shift_id} value={item.shift_id}>
              {item.shift_name}
            </option>
          )
      )}
      {/* <option value="custom">Create Shift</option> */}
    </Input>
  );

  populateCalenderBody = () => {
    let empName = this.state.scheduler
      .map((item) => item.fullname)
      .filter((value, index, self) => self.indexOf(value) === index);
    let tableBody = empName.map((employee, index) => {
      let calenderData = this.state.scheduler.filter(
        (item) => item.fullname === employee
      ).sort((a,b)=> new Date(a.datestamp) - new Date(b.datestamp));
      return (
        <tr key={index}>
          <th className="text-center">{employee}</th>
          {calenderData.map((item, index) => (
            <td
              data-tip={`${
                item.start_time !== null
                  ? moment(item.start_time).format("LT")
                  : "No time Assigned"
              }${
                item.end_time !== null
                  ? `-${moment(item.end_time).format("LT")} ${
                      item.requestedPto ? "Disabled" : ""
                    }`
                  : ""
              }`}
              className="text-center"
              style={{
                backgroundColor: item.shift_color,
                backgroundImage: item.requestedPto
                  ? "linear-gradient(to bottom right,  transparent calc(50% - 1px), black, transparent calc(50% + 1px))"
                  : "",
              }}
              key={index}
              onDoubleClick={() => this.setEdit(item.scheduler_id)}
            >
              {item.scheduler_id === this.state.selectedCell &&
              !item.requestedPto
                ? this.populateEditMenu(item.shift_name)
                : item.shift_code}
            </td>
          ))}
        </tr>
      );
    });

    return tableBody;
  };

  loading = () => (
    <Row className="text-center" style={{ paddingTop: "20%" }}>
      <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
      </div>
    </Row>
  );

  render() {
    if (this.state.loading) return this.loading();
    return (
      <Fragment>
        <ReactTooltip />
        <div style={{ paddingTop: "1.5rem" }}>
          <Row>
            <Col sm={12}>
              <Card>
                <CardHeader>
                  <HelpIcon fontSize="small" data-tip="Double click on cell to edit, press ESC to exit edit mode" style={{ cursor: "pointer" }} />{" "}
                  <CloudDownloadIcon
                    fontSize="small"
                    style={{ cursor: "pointer" }}
                  />
                </CardHeader>
                <CardBody>
                  <Table bordered responsive>
                    <thead>
                      <tr>
                        <th></th>
                        {this.state.calender.map((item, index) =>
                          item.day_name === "Sat" || item.day_name === "Sun" ? (
                            <th
                              className="text-center"
                              style={{ backgroundColor: "#a6a6a6" }}
                              key={index}
                            >
                              {item.day_name}
                            </th>
                          ) : (
                            <th className="text-center" key={index}>
                              {item.day_name}
                            </th>
                          )
                        )}
                      </tr>
                      <tr>
                        <th className="text-center">Employee Name</th>
                        {this.state.calender.map((item, index) =>
                          item.day_name === "Sat" || item.day_name === "Sun" ? (
                            <th
                              className="text-center"
                              style={{ backgroundColor: "#a6a6a6" }}
                              key={index}
                            >
                              {item.day_number}
                            </th>
                          ) : (
                            <th className="text-center" key={index}>
                              {item.day_number}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>{this.populateCalenderBody()}</tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, null)(Calender);

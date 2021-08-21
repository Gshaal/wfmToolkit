import React, { Component } from "react";
import { Row, Col, CardBody, Card , CardHeader} from "reactstrap";
import { Line , Pie} from "react-chartjs-2";
import Axios from "../../hoc/Axios";
import { connect } from "react-redux";
import FeedbackIcon from '@material-ui/icons/Feedback';
import "./style.css";
class index extends Component {
  state = {
    line: { data: [] },
    pie:{},
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  async componentDidMount() {
    try {
      await this.populateLineChart();
      await this.populatePieChart();
    } catch (err) {
      console.log(err);
    }
  }

  populateLineChart = () => {
    Axios.post("/settings/work-force-analysis", null, {
      headers: {
        Authorization: "Bearer " + this.props.token,
      },
    })
      .then((res) => {
        console.log(res.data.results);
        this.setState((prev) => {
          return {
            ...prev,
            line: {
              labels: res.data.results.map((item) => item.month_name),
              datasets: [
                {
                  label: "Work Force Availability (Hours)",
                  data: res.data.results.map((item) => item.total),
                  fill: false,
                  backgroundColor: "rgb(255, 99, 132)",
                  borderColor: "rgba(255, 99, 132, 0.2)",
                },
              ],
            },
          };
        });
      })
      .catch((err) => this.setState({ error: true }));
  };

  populatePieChart = () => {
    Axios.post("/settings/work-force-shifts", null, {
        headers: {
          Authorization: "Bearer " + this.props.token,
        },
      })
        .then((res) => {
          console.log(res.data.results);
          this.setState((prev) => {
            return {
              ...prev,
              pie:{
                labels: res.data.results.map(item => item.shift_name),
                datasets: [
                  {
                    label: 'Shifts Allocation',
                    data:res.data.results.map(item => item.total) ,
                    backgroundColor: res.data.results.map(item => item.bgcolor),
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }
            };
          });
        })
        .catch((err) => this.setState({ error: true }));
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
                <Line
                  data={this.state.line}
                  height={50}
                  options={this.state.options}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ paddingTop: "1%" }}>
          <Col md={6} >
            <Card>
                <CardBody>
                    <Pie data={this.state.pie}  height={500} options={{ maintainAspectRatio: false }} />
                </CardBody>
            </Card>
          </Col>
          <Col  md={6} >
          <Card>
                <CardHeader>
                    <FeedbackIcon/> Announcements
                </CardHeader>
                <CardBody>
                    <div className="text-center">Your are caught up ! 🎉</div>
                </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, null)(index);

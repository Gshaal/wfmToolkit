import React from "react";
import { Card,CardTitle, CardText, Row, Col } from "reactstrap";
import moment from "moment";
export default function Tab2(props) {
  return (
    <Row>
      {props.data.length > 0 ? (
        props.data.map((item,index) => {
          return (
            <Col sm="12"  key={index} style={{ paddingTop: "1%" }}>
              <Card body className="action-request">
                <CardTitle>{ `From:  ${moment(
                      item.date_from
                    ).format("DD/MM/YYYY")} To:  ${moment(item.date_to).format(
                      "DD/MM/YYYY"
                    )}`}</CardTitle>
                <CardText>
                  {`Status: ${item.status} Updated: ${moment(item.last_modified).add(1, "hours").fromNow()}`}
                </CardText>
              </Card>
            </Col>
          );
        })
      ) : (
        <div className="text-center">No Pending Requests Found!</div>
      )}
    </Row>
  );
}

import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import moment from "moment";
export default function Tab1(props) {
  console.log(props);
  return (
    <Row>
      {props.data.length > 0 ? (
        props.data.map((item, index) => {
          return (
            <Col sm="12" key={index}>
              <Card body className="action-request">
                <CardTitle>
                  <span className="date-underline">
                    {`${item.ref_number} /  ${item.fullname} / From:  ${moment(
                      item.date_from
                    ).format("DD/MM/YYYY")} To:  ${moment(item.date_to).format(
                      "DD/MM/YYYY"
                    )}  `}
                  </span>
                </CardTitle>
                <p>{moment(item.last_modified).add(1, "hours").fromNow()}</p>
                <CardText>
                  <b>
                    {item.fullname.split(" ")[0]} says: {"  "}
                  </b>
                  {item.comment}
                </CardText>
                <Row className="text-center">
                  <Col xs={6}>
                    <Button color="danger" block onClick={()=> props.action(item.ref_number,false,item.date_from,item.date_to,item.user_id)}>
                      Decline
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button color="success" block onClick={()=> props.action(item.ref_number,true,item.date_from,item.date_to,item.user_id)}>
                      Approve
                    </Button>
                  </Col>
                </Row>
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

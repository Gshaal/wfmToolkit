import React, { useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardBody,
} from "reactstrap";
import DropdownList from "react-widgets/DropdownList";
export default function Tab3(props) {
  const [email, setEmail] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [manager, setManger] = useState(null);
  const [comment, setComment] = useState("");
  return (
    <Row>
      <Col sm={12} style={{ paddingTop: "1%" }}>
        <Card className="p-4">
          <CardBody>
            <Form style={{ paddingTop: "12px" }}>
              <Row>
                <Col sm={12}>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Email</InputGroupText>
                    </InputGroupAddon>
                    <Input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Date From</InputGroupText>
                    </InputGroupAddon>
                    <Input type="date"  value={dateFrom} onChange={(e)=> setDateFrom(e.target.value)} />
                  </InputGroup>
                </Col>
                <Col sm={6}>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Date To</InputGroupText>
                    </InputGroupAddon>
                    <Input type="date" value={dateTo} onChange={(e)=> setDateTo(e.target.value)} />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Manager</InputGroupText>
                    </InputGroupAddon>
                    <DropdownList
                      dataKey="value"
                      textField="text"
                      value={manager}
                      data={props.wfm_managers}
                      onChange={(e)=> setManger(e)}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Comment</InputGroupText>
                    </InputGroupAddon>
                    <Input type="textarea" value={comment} onChange={(e)=> setComment(e.target.value)} />
                  </InputGroup>
                </Col>
              </Row>
            </Form>
            <Row>
              <Col sm={12} className="text-center">
                <Button className="btn-global" disabled={(dateFrom === "" || dateTo === "")} onClick={()=> props.submit(dateFrom,dateTo,manager.key, comment)}>Submit</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

import React,{useState} from "react";
import {
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Table,
  Button
} from "reactstrap";
export default function Tab1(props) {
    const [team, setTeam ] = useState("")
  return (
    <>
      <Row className="text-center">
        <Col sm="12" md={{ size: 6, offset: 3 }} style={{ paddingTop: "2%" }}>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>#</InputGroupText>
            </InputGroupAddon>
            <Input type="text" placeholder="Add New Team"  value={team} onChange={(e)=> setTeam(e.target.value)}/>
            <Button onClick={()=> props.add(team)}>Add</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} style={{ paddingTop: "2%" }}>
          {props.teams.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <th className="text-center">Teams</th>
                </tr>
              </thead>
              <tbody>
                {props.teams.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">{item.text}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <div className="text-center">Loading...</div>
          )}
        </Col>
      </Row>
    </>
  );
}

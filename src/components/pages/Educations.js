import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Educations(props) {
  return (
    <div>
      <Container>
        <h4>Education</h4>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item) => {
            return (
              <Row key={item.id}>
                <Col>
                  <div>
                    {item.schoolName}
                    {" - "}
                    <span className="text-muted">{item.departmentName}</span>
                  </div>
                </Col>
                <Col>
                  <div className="text-end">
                    {item.startYear} - {item.endYear}
                  </div>
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

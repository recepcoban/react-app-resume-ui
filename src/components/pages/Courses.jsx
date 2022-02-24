import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Courses(props) {
  return (
    <div>
      <Container>
        <h4>Course</h4>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item) => {
            return (
              <Row key={item.id}>
                <Col>
                  <div>{item.name}</div>
                  <div className="invisible">{item.userId}</div>
                </Col>
                <Col>
                  <div className="text-muted text-end">{item.provider}</div>
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

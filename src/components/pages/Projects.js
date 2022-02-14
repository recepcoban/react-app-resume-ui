import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Projects(props) {
  return (
    <div>
      <Container>
        <h4>Projects</h4>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item) => {
            return (
              <Row key={item.id}>
                <Col>
                  <div>
                    <strong>{item.name}</strong>
                  </div>
                  <div>{item.details}</div>
                  <div className="invisible">{item.userId}</div>
                </Col>
                <Col>
                  <div className="text-muted text-end">{item.url}</div>
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

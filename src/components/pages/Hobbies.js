import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";

export default function Hobbies(props) {
  return (
    <div>
      <Container>
        <h4>Hobbies</h4>
        <Row>
          {props.data &&
            props.data.length > 0 &&
            props.data.map((item) => {
              return (
                <Col key={item.id} className="text-center">
                  <span className="badge rounded-pill bg-secondary text-light">
                    {item.name}
                  </span>
                </Col>
              );
            })}
        </Row>
        <br />
      </Container>
    </div>
  );
}

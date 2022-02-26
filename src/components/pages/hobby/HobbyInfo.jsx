import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function HobbyInfo(props) {
  return (
    <div>
      <Container>
        <h4>Hobby</h4>
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

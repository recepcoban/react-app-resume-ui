import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Certifications(props) {
  return (
    <div>
      <Container>
        <h4>Certification</h4>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item) => {
            return (
              <Row key={item.id}>
                <Col>
                  <div>{item.name}</div>
                  <div className="text-muted">{item.provider}</div>
                  <div className="invisible">{item.userId}</div>
                </Col>
                <Col>
                  <div className="text-end">
                    <a href={item.url} className="text-muted">
                      {item.url}
                    </a>
                  </div>
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function ProjectInfo(props) {
  return (
    <div>
      <Container>
        <h4>Project</h4>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item) => {
            return (
              <Row key={item.id}>
                <Col>
                  <div>
                    <h6>{item.name}</h6>
                  </div>
                  <div className="text-muted">{item.details}</div>
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

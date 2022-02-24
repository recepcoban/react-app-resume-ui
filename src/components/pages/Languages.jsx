import React from "react";
import { Container, Row, Col, Progress } from "reactstrap";

export default function Languages(props) {
  const getLevel = (level) => {
    switch (level) {
      case "BEGINNER":
        return 20;
      case "ELEMENTARY":
        return 40;
      case "INTERMEDIATE":
        return 60;
      case "UPPER_INTERMEDIATE":
        return 80;
      case "ADVANCED":
        return 90;
      case "PROFICIENT":
        return 100;
      default:
        return 100;
    }
  };

  return (
    <div>
      <Container>
        <h4>Language</h4>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item) => {
            return (
              <Row key={item.id}>
                <Col>
                  <div>{item.name}</div>
                </Col>
                <Col>
                  <Progress color="info" value={getLevel(item.level)} />
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

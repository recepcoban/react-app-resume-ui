import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function CourseInfo(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4>Course</h4>
          </Col>
          <Col className="text-end">
            <Link to="/course">
              <h4>
                <i id="new" className="bi bi-plus-square text-info"></i>
              </h4>
            </Link>
            <UncontrolledTooltip placement="top" target="new">
              New!
            </UncontrolledTooltip>
          </Col>
          <hr />
        </Row>

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

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function HobbyInfo(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4>Hobby</h4>
          </Col>
          <Col className="text-end">
            <Link to="/hobby">
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

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function CertificationInfo(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4>Certification</h4>
          </Col>
          <Col className="text-end">
            <Link to="/certification" state={{ userId: props.userId }}>
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
                  <div className="text-muted">{item.provider}</div>
                  <div className="invisible">{item.userId}</div>
                </Col>
                <Col>
                  <div className="text-end">
                    <a href={item.url} className="text-muted">
                      {item.url}
                    </a>{" "}
                    <Link
                      to={`/certification/${item.id}`}
                      state={{ userId: item.userId }}
                      tooltip="edit"
                    >
                      <i
                        id="edit"
                        className="bi bi-pencil-square text-info"
                      ></i>
                    </Link>
                    <UncontrolledTooltip placement="top" target="edit">
                      Edit!
                    </UncontrolledTooltip>
                  </div>
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

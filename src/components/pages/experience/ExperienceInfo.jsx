import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function ExperienceInfo(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h4>Work Experience</h4>
        </Col>
        <Col className="text-end">
          <Link to="/experience">
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
                <div>
                  <h6>{item.employer}</h6>
                </div>
                <div className="text-muted">
                  <i>{item.position}</i>
                </div>
                <div className="text-muted">{item.responsibilities}</div>
                <div className="invisible">{item.userId}</div>
              </Col>
              <Col>
                <div className="text-muted text-end">
                  {new Intl.DateTimeFormat("en-GB", {
                    year: "numeric",
                    month: "long",
                    //day: "2-digit",
                  }).format(new Date(item.startDate)) +
                    " - " +
                    (item.active
                      ? "Present"
                      : new Intl.DateTimeFormat("en-GB", {
                          year: "numeric",
                          month: "long",
                          //day: "2-digit",
                        }).format(new Date(item.endDate)))}
                </div>
              </Col>
            </Row>
          );
        })}
    </Container>
  );
}

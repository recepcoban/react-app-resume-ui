import React from "react";
import { Link } from "react-router-dom";
import { Container, Media, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function UserInfo(props) {
  return (
    <Container>
      <Row>
        <Col sm="4" md="3" lg="2">
          <Media
            src="./images/user.png"
            width="150"
            alt={props.data.fullName}
          />
        </Col>
        <Col sm="8" md="9" lg="10">
          <Row>
            <Col>
              <div className="text-end">
                <Link to={`/user/${props.data.id}`} tooltip="edit">
                  <i id="edit" className="bi bi-pencil-square text-info"></i>
                </Link>
                <UncontrolledTooltip placement="top" target="edit">
                  Edit!
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="h2">{props.data.fullName}</div>
              <div className="text-muted">{props.data.title}</div>
              <div className="text-muted">{props.data.employer}</div>
            </Col>
            <Col>
              <div className="text-muted text-end">
                {props.data.email}{" "}
                <i className="bi bi-envelope-check-fill text-dark"></i>
              </div>
              <div className="text-muted text-end">
                {props.data.birthDate}{" "}
                <i className="bi bi-calendar-date-fill text-dark"></i>
              </div>
              <div className="text-muted text-end">
                {props.data.phone}{" "}
                <i className="bi bi-telephone-fill text-dark"></i>
              </div>
              <div className="text-muted text-end">
                {props.data.location}{" "}
                <i className="bi bi-geo-alt-fill text-dark"></i>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <p></p>
          <h5>Summary</h5>
          {props.data.summary}
        </Col>
      </Row>
    </Container>
  );
}

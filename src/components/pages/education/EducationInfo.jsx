import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function EducationInfo(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h4>Education</h4>
        </Col>
        <Col className="text-end">
          <Link to="/education">
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
                  {item.schoolName}
                  {" - "}
                  <span className="text-muted">{item.departmentName}</span>
                </div>
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
                        }).format(new Date(item.endDate)))}{" "}
                  <Link to={`/education/${item.id}`} tooltip="edit">
                    <i id="edit" className="bi bi-pencil-square text-info"></i>
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
  );
}

import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Educations(props) {
  return (
    <div>
      <Container>
        <h4>Education</h4>
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
                          }).format(new Date(item.endDate)))}
                  </div>
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

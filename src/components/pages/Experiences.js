import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Experiences(props) {
  return (
    <div>
      <Container>
        <h4>Experiences</h4>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item) => {
            return (
              <Row key={item.id}>
                <Col>
                  <div>
                    <strong>{item.employer}</strong>
                  </div>
                  <div className="text-muted">
                    <i>{item.position}</i>
                  </div>
                  <div>{item.responsibilities}</div>
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
                      new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        //day: "2-digit",
                      }).format(new Date(item.endDate))}
                  </div>
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

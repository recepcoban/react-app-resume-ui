import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Progress, UncontrolledTooltip } from "reactstrap";

export default function SkillInfo(props) {
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
        <Row>
          <Col>
            <h4>Skill Set</h4>
          </Col>
          <Col className="text-end">
            <Link to="/skill">
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
                </Col>
                <Col>
                  <div className="text-end">
                    <Progress color="info" value={getLevel(item.level)} />{" "}
                    <Link to={`/skill/${item.id}`} tooltip="edit">
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

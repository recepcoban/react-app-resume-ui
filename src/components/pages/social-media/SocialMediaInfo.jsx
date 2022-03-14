import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function SocialMediaInfo(props) {
  const getIcon = (type) => {
    switch (type) {
      case "LINKEDIN":
      case "SKYPE":
      case "FACEBOOK":
      case "GITHUB":
      case "INSTAGRAM":
      case "TWITTER":
      case "YOUTUBE":
        return "bi bi-" + type.toLowerCase();
      default:
        return "bi bi-file-code-fill";
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h4>Social Media</h4>
        </Col>
        <Col className="text-end">
          <Link to="/social-media" state={{ userId: props.userId }}>
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
                <i className={getIcon(item.type)}></i>{" "}
                <a href={item.url} className="text-dark">
                  {item.url}
                </a>
              </Col>
              <Col className="text-end">
                <Link
                  to={`/social-media/${item.id}`}
                  state={{ userId: item.userId }}
                  tooltip="edit"
                >
                  <i id="edit" className="bi bi-pencil-square text-info"></i>
                </Link>
                <UncontrolledTooltip placement="top" target="edit">
                  Edit!
                </UncontrolledTooltip>
              </Col>
            </Row>
          );
        })}
    </Container>
  );
}

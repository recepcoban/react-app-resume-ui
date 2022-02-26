import React from "react";
import { Container, Row, Col } from "reactstrap";

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
      <h4>Social Media</h4>
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
            </Row>
          );
        })}
    </Container>
  );
}

import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function SocialMedias(props) {
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
    <div>
      <Container>
        <h4>Social Medias</h4>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((item) => {
            return (
              <Row key={item.id}>
                <Col>
                  <i className={getIcon(item.type)}></i> {item.url}
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
}

import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

export default function User(props) {
  return (
    <div>
      <Card color="light">
        <CardBody>
          <CardTitle tag="h5">{props.data.fullName}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.data.title}
          </CardSubtitle>
          <CardText>{props.data.summary}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

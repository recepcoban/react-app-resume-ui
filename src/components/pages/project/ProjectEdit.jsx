import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";

export default function ProjectEdit(props) {
  const [error, setError] = useState(null);

  return (
    <Container>
      <br />
      <Row>
        <Col xs={12} sm={12} md={2} lg={3}></Col>
        <Col xs={12} sm={12} md={8} lg={6}>
          <Card body>
            <CardTitle tag="h4" className="text-center">
              Create New Project
            </CardTitle>
            <CardText>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Type your project name"
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="url">URL</Label>
                  <Input
                    id="url"
                    name="url"
                    placeholder="Type your project address"
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="details">Details</Label>
                  <Input
                    id="details"
                    name="details"
                    type="textarea"
                    placeholder="Type your project details"
                  />
                </FormGroup>
                <br />
                <Row>
                  <Col>
                    <Button color="success" type="submit">
                      Save
                    </Button>
                  </Col>
                  <Col className="text-end">
                    <Link to="/">
                      <Button color="danger">Cancel</Button>
                    </Link>
                  </Col>
                </Row>
              </Form>
            </CardText>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-danger text-center">
            <p>
              <br />
              {error && error.code + " - " + error.text}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

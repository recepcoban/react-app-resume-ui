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

export default function SocialMediaEdit(props) {
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <br />
      <Row>
        <Col xs={12} sm={12} md={2} lg={3}></Col>
        <Col xs={12} sm={12} md={8} lg={6}>
          <Card body>
            <CardTitle tag="h4" className="text-center">
              Create New Social Media
            </CardTitle>
            <CardText>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="type">Type</Label>
                  <Input id="type" name="type" type="select">
                    <option className="text-muted">
                      Choose your account type
                    </option>
                    <option>LINKEDIN</option>
                    <option>SKYPE</option>
                    <option>FACEBOOK</option>
                    <option>GITHUB</option>
                    <option>INSTAGRAM</option>
                    <option>TWITTER</option>
                    <option>YOUTUBE</option>
                    <option>HACKERRANK</option>
                  </Input>
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="url">URL</Label>
                  <Input
                    id="url"
                    name="url"
                    placeholder="Type your account address"
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
        <Col className="text-danger text-center my-3">
          <div>{error && error.code + " - " + error.text}</div>
        </Col>
      </Row>
    </Container>
  );
}

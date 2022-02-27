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

export default function ExperienceEdit(props) {
  const [error, setError] = useState(null);

  return (
    <Container>
      <br />
      <Row>
        <Col xs={12} sm={12} md={2} lg={3}></Col>
        <Col xs={12} sm={12} md={8} lg={6}>
          <Card body>
            <CardTitle tag="h4" className="text-center">
              Create New Experience
            </CardTitle>
            <CardText>
              <Form>
                <FormGroup>
                  <Label for="employer">Employer</Label>
                  <Input
                    id="employer"
                    name="employer"
                    placeholder="Type your employer"
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="position">Position</Label>
                  <Input
                    id="position"
                    name="position"
                    placeholder="Type your position"
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="url">URL</Label>
                  <Input
                    id="url"
                    name="url"
                    placeholder="Type your employer address"
                  />
                </FormGroup>
                <br />
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        placeholder="Start Date"
                        type="date"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="endDate">End Date</Label>
                      <Input
                        id="endDate"
                        name="endDate"
                        placeholder="End Date"
                        type="date"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <FormGroup check>
                      <Input id="present" name="present" type="checkbox" />
                      <Label for="present" check>
                        Present
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <br />
                <FormGroup>
                  <Label for="responsibilities">Responsibilities</Label>
                  <Input
                    id="responsibilities"
                    name="responsibilities"
                    type="textarea"
                    placeholder="Type your responsibilities"
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

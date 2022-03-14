import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
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
import { getExperienceById } from "../../api/ExperienceApi";

export default function ExperienceEdit() {
  const { id } = useParams();
  const location = useLocation();
  const { userId } = location.state;

  const [experienceData, setExperienceData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getExperienceInfoById();
    }
  }, []);

  async function getExperienceInfoById() {
    const experienceResponse = await getExperienceById(id);
    if (!experienceResponse.isAxiosError) {
      setExperienceData(experienceResponse.data);
      setError(null);
    } else {
      setExperienceData(null);
      setError(experienceResponse.response.data.message);
    }
  }

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
              Create New Experience
            </CardTitle>
            <CardText>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="employer">Employer</Label>
                  <Input
                    id="employer"
                    name="employer"
                    placeholder="Type your employer"
                    value={experienceData && experienceData.experience.employer}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="position">Position</Label>
                  <Input
                    id="position"
                    name="position"
                    placeholder="Type your position"
                    value={experienceData && experienceData.experience.position}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="url">URL</Label>
                  <Input
                    id="url"
                    name="url"
                    placeholder="Type your employer address"
                    value={experienceData && experienceData.experience.url}
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
                        value={
                          experienceData && experienceData.experience.startDate
                        }
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
                        value={
                          experienceData &&
                          !experienceData.experience.active &&
                          experienceData.experience.endDate
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <FormGroup check>
                      <Input
                        id="present"
                        name="present"
                        type="checkbox"
                        checked={
                          experienceData && experienceData.experience.active
                        }
                      />
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
                    rows="5"
                    placeholder="Type your responsibilities"
                    value={
                      experienceData &&
                      experienceData.experience.responsibilities
                    }
                  />
                </FormGroup>
                <br />
                <Row>
                  <Col>
                    <Link to="/">
                      <Button color="primary">Home</Button>
                    </Link>
                  </Col>
                  <Col className="text-end">
                    <Button color="success" type="submit">
                      Save
                    </Button>{" "}
                    <Link to="/">
                      <Button color="danger">Delete</Button>
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

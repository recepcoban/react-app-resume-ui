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
import { getProjectById } from "../../api/ProjectApi";

export default function ProjectEdit() {
  const { id } = useParams();
  const location = useLocation();
  const { userId } = location.state;

  const [projectData, setProjectData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getProjectInfoById();
    }
  }, []);

  async function getProjectInfoById() {
    const projectResponse = await getProjectById(id);
    if (!projectResponse.isAxiosError) {
      setProjectData(projectResponse.data);
      setError(null);
    } else {
      setProjectData(null);
      setError(projectResponse.response.data.message);
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
              Create New Project
            </CardTitle>
            <CardText>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Type your project name"
                    value={projectData && projectData.project.name}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="url">URL</Label>
                  <Input
                    id="url"
                    name="url"
                    placeholder="Type your project address"
                    value={projectData && projectData.project.url}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="details">Details</Label>
                  <Input
                    id="details"
                    name="details"
                    type="textarea"
                    rows="5"
                    placeholder="Type your project details"
                    value={projectData && projectData.project.details}
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

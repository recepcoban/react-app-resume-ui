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
import { getCourseById } from "../../api/CourseApi";

export default function CourseEdit() {
  const { id } = useParams();
  const location = useLocation();
  const { userId } = location.state;

  const [courseData, setCourseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getCourseInfoById();
    }
  }, []);

  async function getCourseInfoById() {
    const courseResponse = await getCourseById(id);
    if (!courseResponse.isAxiosError) {
      setCourseData(courseResponse.data);
      setError(null);
    } else {
      setCourseData(null);
      setError(courseResponse.response.data.message);
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
              Create New Course
            </CardTitle>
            <CardText>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Type your course name"
                    value={courseData && courseData.course.name}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="provider">Provider</Label>
                  <Input
                    id="provider"
                    name="provider"
                    placeholder="Type your course provider"
                    value={courseData && courseData.course.provider}
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

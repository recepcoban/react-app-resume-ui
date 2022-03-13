import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
import { getEducationById } from "../../api/EducationApi";

export default function EducationEdit() {
  const { id } = useParams();
  const [educationData, setEducationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getEducationInfoById();
    }
  }, []);

  async function getEducationInfoById() {
    const educationResponse = await getEducationById(id);
    if (!educationResponse.isAxiosError) {
      setEducationData(educationResponse.data);
      setError(null);
    } else {
      setEducationData(null);
      setError(educationResponse.response.data.message);
    }
  }

  return (
    <Container>
      <br />
      <Row>
        <Col xs={12} sm={12} md={2} lg={3}></Col>
        <Col xs={12} sm={12} md={8} lg={6}>
          <Card body>
            <CardTitle tag="h4" className="text-center">
              Create New Education
            </CardTitle>
            <CardText>
              <Form>
                <FormGroup>
                  <Label for="schoolName">School Name</Label>
                  <Input
                    id="schoolName"
                    name="schoolName"
                    placeholder="Type your school name"
                    value={educationData && educationData.education.schoolName}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="departmentName">Department</Label>
                  <Input
                    id="departmentName"
                    name="departmentName"
                    placeholder="Type your department"
                    value={
                      educationData && educationData.education.departmentName
                    }
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
                          educationData && educationData.education.startDate
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
                          educationData &&
                          !educationData.education.active &&
                          educationData.education.endDate
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
                          educationData && educationData.education.active
                        }
                      />
                      <Label for="present" check>
                        Present
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
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

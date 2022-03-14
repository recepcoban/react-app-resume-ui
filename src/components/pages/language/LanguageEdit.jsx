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
import { getLanguageById } from "../../api/LanguageApi";

export default function LanguageEdit() {
  const { id } = useParams();
  const location = useLocation();
  const { userId } = location.state;

  const [languageData, setLanguageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getLanguageInfoById();
    }
  }, []);

  async function getLanguageInfoById() {
    const languageResponse = await getLanguageById(id);
    if (!languageResponse.isAxiosError) {
      setLanguageData(languageResponse.data);
      setError(null);
    } else {
      setLanguageData(null);
      setError(languageResponse.response.data.message);
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
              Create New Language
            </CardTitle>
            <CardText>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Type your language"
                    value={languageData && languageData.language.name}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="level">Level</Label>
                  <Input
                    id="level"
                    name="level"
                    type="select"
                    value={languageData && languageData.language.level}
                  >
                    <option className="text-muted">
                      Choose your language level
                    </option>
                    <option>BEGINNER</option>
                    <option>ELEMENTARY</option>
                    <option>INTERMEDIATE</option>
                    <option>UPPER INTERMEDIATE</option>
                    <option>ADVANCED</option>
                    <option>PROFICIENT</option>
                  </Input>
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

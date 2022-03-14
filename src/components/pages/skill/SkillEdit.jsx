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
import { getSkillById } from "../../api/SkillApi";

export default function SkillEdit() {
  const { id } = useParams();
  const location = useLocation();
  const { userId } = location.state;

  const [skillData, setSkillData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getSkillInfoById();
    }
  }, []);

  async function getSkillInfoById() {
    const skillResponse = await getSkillById(id);
    if (!skillResponse.isAxiosError) {
      setSkillData(skillResponse.data);
      setError(null);
    } else {
      setSkillData(null);
      setError(skillResponse.response.data.message);
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
              Create New Skill
            </CardTitle>
            <CardText>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Type your skill"
                    value={skillData && skillData.skill.name}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="level">Level</Label>
                  <Input
                    id="level"
                    name="level"
                    type="select"
                    value={skillData && skillData.skill.level}
                  >
                    <option className="text-muted">
                      Choose your skill level
                    </option>
                    <option value="BEGINNER">BEGINNER</option>
                    <option value="ELEMENTARY">ELEMENTARY</option>
                    <option value="INTERMEDIATE">INTERMEDIATE</option>
                    <option value="UPPER_INTERMEDIATE">
                      UPPER INTERMEDIATE
                    </option>
                    <option value="ADVANCED">ADVANCED</option>
                    <option value="PROFICIENT">PROFICIENT</option>
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

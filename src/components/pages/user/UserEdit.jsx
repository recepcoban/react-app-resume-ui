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
import { getUserById, createUser } from "../../api/UserApi";

export default function UserEdit() {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getUserInfoById();
    }
  }, []);

  async function getUserInfoById() {
    const userResponse = await getUserById(id);
    if (!userResponse.isAxiosError) {
      setUserData(userResponse.data);
      setError(null);
    } else {
      setUserData(null);
      setError(userResponse.response.data.message);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    let user = {
      email: e.target.email.value,
      fullName: e.target.fullName.value,
      title: e.target.title.value,
      employer: e.target.employer.value,
      birthDate: e.target.birthDate.value,
      phone: e.target.phone.value,
      location: e.target.location.value,
      summary: e.target.summary.value,
    };

    createNewUser(user);
  };

  async function createNewUser(user) {
    const userResponse = await createUser(user);
    if (!userResponse.isAxiosError) {
      setError(userResponse.data.message);
    } else {
      setError(userResponse.response.data.message);
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
              Create New User
            </CardTitle>
            <CardText>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Type your valid email"
                    type="email"
                    value={userData && userData.user.email}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Type your full name"
                    value={userData && userData.user.fullName}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Type your title"
                    value={userData && userData.user.title}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="employer">Employer</Label>
                  <Input
                    id="employer"
                    name="employer"
                    placeholder="Type your employer"
                    value={userData && userData.user.employer}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="birthDate">Birth Date</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    placeholder="Birth Date"
                    type="date"
                    value={userData && userData.user.birthDate}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Type your phone"
                    value={userData && userData.user.phone}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Type your location"
                    value={userData && userData.user.location}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="summary">Summary</Label>
                  <Input
                    id="summary"
                    name="summary"
                    type="textarea"
                    rows="5"
                    placeholder="Type your summary"
                    value={userData && userData.user.summary}
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
          <p className="text-danger text-center">
            <br />
            {error && error.code + " - " + error.text}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

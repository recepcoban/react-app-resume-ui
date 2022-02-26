import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
import createUser from "../../api/UserApi";

export default function UserEdit(props) {
  const [error, setError] = useState(null);

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
      props.userCallback(user.email);
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
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Type your full name"
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Type your title"
                  />
                </FormGroup>
                <br />
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
                  <Label for="birthDate">Birth Date</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    placeholder="Birth Date"
                    type="date"
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Type your phone"
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    placeholder="Type your location"
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="summary">Summary</Label>
                  <Input
                    id="summary"
                    name="summary"
                    type="textarea"
                    placeholder="Type your summary"
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
                    <NavLink to="/">
                      <Button color="danger">Cancel</Button>
                    </NavLink>
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

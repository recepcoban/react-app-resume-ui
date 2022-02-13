import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import createUser from "../api/UserApi";

export default function User(props) {
  const [isOpenUserModal, setIsOpenUserModal] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    let user = {
      email: e.target.email.value,
      fullName: e.target.fullName.value,
      title: e.target.title.value,
      birthDate: e.target.birthDate.value,
      phone: e.target.phone.value,
      location: e.target.location.value,
      summary: e.target.summary.value,
    };

    createNewUser(user);
  };

  async function createNewUser(user) {
    debugger;
    const userResponse = await createUser(user);
    if (!userResponse.isAxiosError) {
      props.userCallback(user.email);
      setIsOpenUserModal(!isOpenUserModal);
    } else {
      setError(userResponse.response.data.message);
    }
  }

  const userModal = () => {
    setIsOpenUserModal(!isOpenUserModal);
  };

  return (
    <div>
      <div className="text-end">
        <Button outline color="info" onClick={userModal}>
          New User
        </Button>
      </div>
      <Card color="light">
        <CardBody>
          <CardTitle tag="h5">{props.data.fullName}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.data.title}
          </CardSubtitle>
          <CardText>{props.data.summary}</CardText>
        </CardBody>
      </Card>
      <div>
        <Modal isOpen={isOpenUserModal} toggle={userModal}>
          <Form onSubmit={onSubmit}>
            <ModalHeader>Create New User</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Type your valid email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Type your full name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input id="title" name="title" placeholder="Type your title" />
              </FormGroup>
              <FormGroup>
                <Label for="birthDate">Birth Date</Label>
                <Input
                  id="birthDate"
                  name="birthDate"
                  placeholder="Birth Date"
                  type="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input id="phone" name="phone" placeholder="Type your phone" />
              </FormGroup>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="Type your location"
                />
              </FormGroup>
              <FormGroup>
                <Label for="summary">Summary</Label>
                <Input
                  id="summary"
                  name="summary"
                  type="textarea"
                  placeholder="Type your summary"
                />
              </FormGroup>
              <FormGroup>
                <div className="text-danger">
                  {error && error.code + " - " + error.text}
                </div>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="success" type="submit">
                Save
              </Button>
              <Button color="danger" onClick={userModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

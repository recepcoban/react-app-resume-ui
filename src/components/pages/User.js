import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export default function User(props) {
  const [isOpen, setIsOpen] = useState(false);
  const searchModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="text-end">
        <Button outline color="info" onClick={searchModal}>
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
        <Modal isOpen={isOpen} toggle={searchModal}>
          <ModalHeader>Create New User</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="email">Email</Label>
                <Col>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Type a valid email..."
                    type="email"
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={searchModal}>
              Search
            </Button>
            <Button color="danger" onClick={searchModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

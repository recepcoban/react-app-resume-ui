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
import { getCertificationById } from "../../api/CertificationApi";

export default function CertificationEdit() {
  const { id } = useParams();
  const [certificationData, setCertificationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getCertificationInfoById();
    }
  }, []);

  async function getCertificationInfoById() {
    const certificationResponse = await getCertificationById(id);
    if (!certificationResponse.isAxiosError) {
      setCertificationData(certificationResponse.data);
      setError(null);
    } else {
      setCertificationData(null);
      setError(certificationResponse.response.data.message);
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
              Create New Certification
            </CardTitle>
            <CardText>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Type your certification name"
                    value={
                      certificationData && certificationData.certification.name
                    }
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="provider">Provider</Label>
                  <Input
                    id="provider"
                    name="provider"
                    placeholder="Type your certification provider"
                    value={
                      certificationData &&
                      certificationData.certification.provider
                    }
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="url">URL</Label>
                  <Input
                    id="url"
                    name="url"
                    placeholder="Type your certification address"
                    value={
                      certificationData && certificationData.certification.url
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

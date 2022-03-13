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
import { getSocialMediaById } from "../../api/SocialMediaApi";

export default function SocialMediaEdit(props) {
  const { id } = useParams();
  const [socialMediaData, setSocialMediaData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      getSocialMediaInfoById();
    }
  }, []);

  async function getSocialMediaInfoById() {
    const socialMediaResponse = await getSocialMediaById(id);
    if (!socialMediaResponse.isAxiosError) {
      setSocialMediaData(socialMediaResponse.data);
      setError(null);
    } else {
      setSocialMediaData(null);
      setError(socialMediaResponse.response.data.message);
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
              Create New Social Media
            </CardTitle>
            <CardText>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="type">Type</Label>
                  <Input
                    id="type"
                    name="type"
                    type="select"
                    value={socialMediaData && socialMediaData.socialMedia.type}
                  >
                    <option className="text-muted">
                      Choose your account type
                    </option>
                    <option value="LINKEDIN">LINKEDIN</option>
                    <option value="SKYPE">SKYPE</option>
                    <option value="FACEBOOK">FACEBOOK</option>
                    <option value="GITHUB">GITHUB</option>
                    <option value="INSTAGRAM">INSTAGRAM</option>
                    <option value="TWITTER">TWITTER</option>
                    <option value="YOUTUBE">YOUTUBE</option>
                    <option value="HACKERRANK">HACKERRANK</option>
                  </Input>
                </FormGroup>
                <br />
                <FormGroup>
                  <Label for="url">URL</Label>
                  <Input
                    id="url"
                    name="url"
                    placeholder="Type your account address"
                    value={socialMediaData && socialMediaData.socialMedia.url}
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
        <Col className="text-danger text-center my-3">
          <div>{error && error.code + " - " + error.text}</div>
        </Col>
      </Row>
    </Container>
  );
}

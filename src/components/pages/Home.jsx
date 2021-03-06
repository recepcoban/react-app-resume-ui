import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormGroup,
  InputGroup,
  Input,
  Row,
  Col,
  Label,
} from "reactstrap";
import getResume from "../api/ResumeApi";
import { Spinners, ErrorAlert } from "../common";
import {
  UserInfo,
  SocialMediaInfo,
  EducationInfo,
  ExperienceInfo,
  SkillInfo,
  LanguageInfo,
  CertificationInfo,
  CourseInfo,
  ProjectInfo,
  HobbyInfo,
} from "/";

export default function Home() {
  const [email, setEmail] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResumeData();
  }, [email]);

  async function getResumeData() {
    const resumeResponse = await getResume(email);
    if (!resumeResponse.isAxiosError) {
      setResumeData(resumeResponse.data);
      setError(null);
    } else {
      setResumeData(null);
      setError(resumeResponse.response.data.message);
    }

    setLoading(false);
  }

  const getResumeDataByEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
  };

  return (
    <Container fluid className="container">
      <Row>
        <Col>{loading && <Spinners />}</Col>
      </Row>
      <Row>
        <Col>{error && <ErrorAlert error={error} />}</Col>
      </Row>
      <br />
      <Row>
        <Col sm="9" md="8" lg="6">
          <Form onSubmit={getResumeDataByEmail}>
            <FormGroup>
              <Label for="email">
                Already have a resume? check it with your email!
              </Label>
              <InputGroup>
                <Input
                  id="email"
                  name="email"
                  placeholder="Type your valid email..."
                  type="email"
                />
                <Button color="success">Search</Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
        <Col sm="3" md="4" lg="6" className="text-end">
          <br />
          <Link to="/user">
            <Button outline color="info">
              New Resume
            </Button>
          </Link>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {resumeData && resumeData.user && (
            <div>
              <UserInfo data={resumeData.user} />
              <br />
              <SocialMediaInfo
                data={resumeData.socialMedias}
                userId={resumeData.user.id}
              />
              <br />
              <EducationInfo
                data={resumeData.educations}
                userId={resumeData.user.id}
              />
              <br />
              <ExperienceInfo
                data={resumeData.experiences}
                userId={resumeData.user.id}
              />
              <br />
              <SkillInfo data={resumeData.skills} userId={resumeData.user.id} />
              <br />
              <LanguageInfo
                data={resumeData.languages}
                userId={resumeData.user.id}
              />
              <br />
              <CertificationInfo
                data={resumeData.certifications}
                userId={resumeData.user.id}
              />
              <br />
              <CourseInfo
                data={resumeData.courses}
                userId={resumeData.user.id}
              />
              <br />
              <ProjectInfo
                data={resumeData.projects}
                userId={resumeData.user.id}
              />
              <br />
              <HobbyInfo
                data={resumeData.hobbies}
                userId={resumeData.user.id}
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

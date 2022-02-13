import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import AppNavbar from "../common/AppNavbar";
import Spinners from "../common/Spinners";
import User from "./User";
import SocialMedias from "./SocialMedias";
import Educations from "./Educations";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Languages from "./Languages";
import Certifications from "./Certifications";
import Courses from "./Courses";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import getResume from "../api/ResumeApi";
import ErrorAlert from "../common/ErrorAlert";

export default function Home() {
  const [email, setEmail] = useState(null);
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);

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
    setIsOpenSearchModal(!isOpenSearchModal);
  };

  return (
    <div>
      <AppNavbar />
      <br />
      <Container fluid className="container">
        {loading && <Spinners />}
        {error && <ErrorAlert error={error} />}
        <div className="text-end">
          <Button
            outline
            color="info"
            onClick={() => setIsOpenSearchModal(!isOpenSearchModal)}
          >
            Already have a resume? check it with your email!
          </Button>
        </div>
        <hr />
        {resumeData && resumeData.user && (
          <div>
            <User data={resumeData.user} userCallback={setEmail} />
            <br />
            <SocialMedias data={resumeData.socialMedias} />
            <br />
            <Educations data={resumeData.educations} />
            <br />
            <Experiences data={resumeData.experiences} />
            <br />
            <Skills data={resumeData.skills} />
            <br />
            <Languages data={resumeData.languages} />
            <br />
            <Certifications data={resumeData.certifications} />
            <br />
            <Courses data={resumeData.courses} />
            <br />
            <Projects data={resumeData.projects} />
            <br />
            <Hobbies data={resumeData.hobbies} />
          </div>
        )}
      </Container>
      <div>
        <Modal
          isOpen={isOpenSearchModal}
          toggle={() => setIsOpenSearchModal(!isOpenSearchModal)}
        >
          <Form onSubmit={getResumeDataByEmail}>
            <ModalHeader>Already have a resume?</ModalHeader>
            <ModalBody>
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
            </ModalBody>
            <ModalFooter>
              <Button color="success">Search</Button>
              <Button
                color="danger"
                onClick={() => setIsOpenSearchModal(!isOpenSearchModal)}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    </div>
  );
}

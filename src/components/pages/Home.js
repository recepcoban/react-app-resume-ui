import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import axios from "axios";
import AppNavbar from "../common/AppNavbar";
import Spinners from "../common/Spinners";
import User from "./User";
import Courses from "./Courses";
import Certifications from "./Certifications";
import Educations from "./Educations";
import Experiences from "./Experiences";

const URL = "https://spring-boot-resume-api.herokuapp.com/api/resume/default";

export default function Home() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResumeData();
  }, []);

  async function getResumeData() {
    await axios
      .get(URL)
      .then((response) => {
        setResumeData(response.data);
        setError(null);
        console.log(response.data);
      })
      .catch((error) => {
        setResumeData(null);
        setError(error.response.data.message);
        console.log(error.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <AppNavbar />
      <br />
      <Container fluid className="container">
        {loading && <Spinners />}
        {error && error.code + " - " + error.text}
        {resumeData && resumeData.user && (
          <div>
            <User data={resumeData.user} />
            <br />
            <Courses data={resumeData.courses} />
            <br />
            <Certifications data={resumeData.certifications} />
            <br />
            <Educations data={resumeData.educations} />
            <br />
            <Experiences data={resumeData.experiences} />
          </div>
        )}
      </Container>
    </div>
  );
}

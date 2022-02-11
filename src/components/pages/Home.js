import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import AppNavbar from "../common/AppNavbar";
import Spinners from "../common/Spinners";
import User from "./User";
import Courses from "./Courses";
import Certifications from "./Certifications";
import Educations from "./Educations";
import Experiences from "./Experiences";
import getDefaultResume from "../api/ResumeApi";
import ErrorAlert from "../common/ErrorAlert";

export default function Home() {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getResumeData();
  }, []);

  async function getResumeData() {
    const defaultResumeResponse = await getDefaultResume();
    if (!defaultResumeResponse.isAxiosError) {
      setResumeData(defaultResumeResponse.data);
      setError(null);
    } else {
      setResumeData(null);
      setError(defaultResumeResponse.response.data.message);
    }

    setLoading(false);
  }

  return (
    <div>
      <AppNavbar />
      <br />
      <Container fluid className="container">
        {loading && <Spinners />}
        {error && <ErrorAlert error={error} />}
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

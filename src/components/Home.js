import React, { useEffect, useState } from "react";
import AppNavbar from "./AppNavbar";
import { Container } from "reactstrap";

const Home = () => {
  const [resume, setResume] = useState([]);

  useEffect(() => {
    getDefaultResume();
  });

  async function getDefaultResume() {
    const response = await fetch("/api/resume/default");
    const data = await response.json();
    setResume(data);
    console.log(resume);
  }

  return (
    <div>
      <AppNavbar />
      <br />
      <Container fluid className="container">
        <p>
          Name: {resume && resume.user.fullName} <br />
          Email: {resume && resume.user.email} <br />
          Title: {resume && resume.user.title} <br />
          Birth Date: {resume && resume.user.birthDate} <br />
          Phone: {resume && resume.user.phone}
        </p>
      </Container>
    </div>
  );
};

export default Home;

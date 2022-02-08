import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import AppNavbar from "./AppNavbar";
import User from "./User";
import Courses from "./Courses";
import Certifications from "./Certifications";
import Educations from "./Educations";
import Experiences from "./Experiences";

const fetchURL = "https://spring-boot-resume-api.herokuapp.com/api/resume/default";
const getItems = () => fetch(fetchURL).then((res) => res.json());

const Home = () => {
  const [user, setUser] = useState({});
  const [courses, setCourses] = useState({});
  const [certifications, setCertifications] = useState({});
  const [educations, setEducations] = useState({});
  const [experiences, setExperiences] = useState({});

  useEffect(() => {
    getItems().then((data) => {
      setUser(data.user);
      setCourses(data.courses);
      setCertifications(data.certifications);
      setEducations(data.educations);
      setExperiences(data.experiences);
    });
  }, []);

  return (
    <div>
      <AppNavbar />
      <br />
      <Container fluid className="container">
        <User data={user} />
        <br />
        <Courses data={courses} />
        <br />
        <Certifications data={certifications} />
        <br />
        <Educations data={educations} />
        <br />
        <Experiences data={experiences} />
      </Container>
    </div>
  );
};

export default Home;

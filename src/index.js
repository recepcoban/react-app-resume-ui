import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer } from "./components/common";
import {
  Home,
  UserEdit,
  SocialMediaEdit,
  EducationEdit,
  ExperienceEdit,
  SkillEdit,
  LanguageEdit,
  CertificationEdit,
  CourseEdit,
  ProjectEdit,
  HobbyEdit,
} from "./components/pages";
import "./components/common/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<UserEdit />} />
      <Route path="/social-media" element={<SocialMediaEdit />} />
      <Route path="/education" element={<EducationEdit />} />
      <Route path="/experience" element={<ExperienceEdit />} />
      <Route path="/skill" element={<SkillEdit />} />
      <Route path="/language" element={<LanguageEdit />} />
      <Route path="/certification" element={<CertificationEdit />} />
      <Route path="/course" element={<CourseEdit />} />
      <Route path="/project" element={<ProjectEdit />} />
      <Route path="/hobby" element={<HobbyEdit />} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);

import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  Media,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

export default function Navigation() {
  return (
    <Navbar color="dark" dark expand="md">
      <Collapse navbar className="container">
        <NavbarBrand href="/">
          <Media
            src="./images/favicon.ico"
            width="30"
            alt="app logo"
            className="d-inline-block align-top"
          />{" "}
          Home
        </NavbarBrand>
        <Nav className="me-auto" navbar>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              App Details
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem
                href="https://github.com/recepcoban/react-app-resume-ui"
                target="_blank"
              >
                UI App - Frontend
              </DropdownItem>
              <DropdownItem
                href="https://github.com/recepcoban/spring-boot-resume-api"
                target="_blank"
              >
                API - Backend
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>React App Resume UI</NavbarText>
      </Collapse>
    </Navbar>
  );
}

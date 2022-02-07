import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const AppNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <Collapse navbar className="container">
        <NavbarBrand href="/">Home</NavbarBrand>
        <Nav className="me-auto" navbar>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              App Details
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="https://github.com/recepcoban/react-app-resume-ui">
                UI App - Frontend
              </DropdownItem>
              <DropdownItem href="https://github.com/recepcoban/spring-boot-resume-api">
                API - Backend
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>React App Resume UI</NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;

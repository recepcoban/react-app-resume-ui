import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, NavbarBrand, Collapse, NavbarText } from "reactstrap";
import Home from "../pages/Home";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
        </Switch>
      </Router>

      <Navbar color="dark" dark expand="md">
        <Collapse className="container">
          <NavbarBrand href="/">React App Resume UI</NavbarBrand>
          <NavbarText>
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/recepcoban"
              className="text-info"
            >
              Recep Çoban
            </a>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </Router>
  );
}

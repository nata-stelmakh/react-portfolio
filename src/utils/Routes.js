import React from "react";
import LandingPage from "../components/LandingPage";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;

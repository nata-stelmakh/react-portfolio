import React, { Component } from "react";
import {
  Layout,
  Header,
  Footer,
  FooterSection,
  FooterLinkList,
  Navigation,
  Content,
  Drawer,
} from "react-mdl";
import "./App.css";
import Routes from "./utils/Routes";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Layout fixedHeader>
            <Header
              className="header-color"
              title={
                <span>
                  <strong>Natallia Stelmakh</strong>
                </span>
              }
            ></Header>
            <Drawer>
              <Navigation>
                <Link to="/">Welcome</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                {/* <Link to="/resume">Resume</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content className="body-color">
              <div className="page-content" />
              <Routes />
            </Content>
          </Layout>
        </div>
        <div>
          <Footer size="mini">
            <FooterSection type="left">
              <FooterLinkList>
                <Link to="https://github.com/nata-stelmakh">Github</Link>
                <Link to="https://www.linkedin.com/in/natallia-stelmakh-29b6001a6/">
                  LinkedIn
                </Link>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </div>
      </div>
    );
  }
}
export default App;

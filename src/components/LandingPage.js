import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h2>Hi ! My name is Natallia!</h2>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>Full Stack Web Developer</h1>
              <hr></hr>

              <p>
                HTML | CSS | Bootstrap | JavaScript | NodeJS | SQL | MongoDB |
                Express | React
              </p>
              <div className="icons">
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3"></i>
                <i class="fab fa-bootstrap"></i>
                <i class="fab fa-js-square"></i>
                <i class="fab fa-node-js"></i>
                <i class="fab fa-react"></i>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <div className="social-links">
                <a
                  href="https://github.com/nata-stelmakh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-git-square" aria-hidden="true"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/natallia-stelmakh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;

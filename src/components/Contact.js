import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <div className="container" id="mainContainer">
          <Grid className="landing-grid">
            <Cell col={12}>
              <h2>Contact Me</h2>

              <p>
                <Button>
                  {" "}
                  <a id="email" href="mailto:stelmakh.natallia@gmail.com">
                    Email: stelmakh.natallia@gmail.com
                  </a>
                </Button>
              </p>
              <p id="phone">
                <Button>Phone :+1-973-7506535</Button>
              </p>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;

import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <div className="container" id="mainContainer">
          <Grid className="landing-grid">
            <Cell col={12}>
              <div className="banner-text">
                <h2>Contact Me</h2>

                <p>
                  <Button>
                    <a id="email" href="mailto:stelmakh.natallia@gmail.com">
                      Email: stelmakh.natallia@gmail.com
                    </a>
                  </Button>
                </p>
                <p>
                  <Button id="phone">Phone : +1-973-7506535</Button>
                </p>
                <p>
                  <Button id="address">Address : Wanaque,NJ, 07465</Button>
                </p>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;

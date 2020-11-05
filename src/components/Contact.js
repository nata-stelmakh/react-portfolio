import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container" id="mainContainer">
          <h2>Contact Me</h2>

          <p>
            <a id="email" href="mailto:stelmakh.natallia@gmail.com">
              Email: stelmakh.natallia@gmail.com
            </a>
          </p>
          <p id="phone">Phone :+1-973-7506535</p>
        </div>
      </div>
    );
  }
}

export default Contact;

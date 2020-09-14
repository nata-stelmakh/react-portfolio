import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container" id="mainContainer">
          <h2>Contact Me</h2>

          <p>
            <a href="mailto:stelmakh.natallia@gmail.com">
              Email: stelmakh.natallia@gmail.com
            </a>
          </p>
          <p>Phone :+1-973-7506535</p>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              id="usr"
              placeholder="Name"
            ></input>
          </div>
          <label>Email:</label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
            ></input>
            <div className="input-group-append">
              <span className="input-group-text">@example.com</span>
            </div>
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              className="form-control"
              rows="5"
              id="comment"
              placeholder="Your message"
            ></textarea>
          </div>

          <button type="button" className="btn btn-outline-secondary">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;

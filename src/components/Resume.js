import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div>
        <div>
          <figure className="figure">
            <img
              src="assets/Resume.png"
              className="card-img-top figure-img img-fluid rounded"
              alt="organizer"
              width="503"
              height="290"
            ></img>

            <a href="https://drive.google.com/file/d/1VtWdvIfSv6yc-pU_YjG2odeHFS2yAL6s/view?usp=sharing">
              <p className="figcaption">RESUME</p>
            </a>
          </figure>
        </div>
      </div>
    );
  }
}
export default Resume;

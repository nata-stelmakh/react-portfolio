import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div class="container" id="mainContainer">
        <div class="row">
          <div class="jumbotron">
            <h1 class="display-4"> Hi ! My name is Natallia Stelmakh !</h1>
            <p class="lead">
              {" "}
              I am a Full-Stack Developer, currently living in North Jersey.
            </p>
            <p class="lead">
              {" "}
              My primary focus and inspiration for my studies is Web
              Development.
            </p>
            <hr></hr>

            {/* <a href="https://drive.google.com/file/d/1VtWdvIfSv6yc-pU_YjG2odeHFS2yAL6s/view?usp=sharing">
              RESUME
            </a> */}
            <a href="https://github.com/nata-stelmakh">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/natallia-stelmakh-29b6001a6/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;

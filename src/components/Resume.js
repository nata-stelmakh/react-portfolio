import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="demo-card-image mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title mdl-card--expand"></div>
            <div class="mdl-card__actions">
              <span class="demo-card-image__filename">
                <a href="https://docs.google.com/document/d/1DzwmrQ0G1EpsKRMEtz3tveR-pwi1IDykfRiGPPRrMiw/edit?usp=sharing">
                  Download
                </a>
              </span>
            </div>
          </div>
          {/* <figure className="figure">
            <img
              src="public\assets\Resume.png"
              className="card-img-top figure-img img-fluid rounded"
              alt="organizer"
              width="503"
              height="290"
            ></img> */}

          {/* <a href="https://drive.google.com/file/d/1Uvkst4PEBES9FFv8gWFDZBLzElUhI_Nh/view?usp=sharing">
              <p className="figcaption">Download</p>
            </a>
          </figure> */}
        </div>
      </div>
    );
  }
}
export default Resume;

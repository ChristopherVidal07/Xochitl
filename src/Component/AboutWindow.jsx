import React from "react";
import AboutPhoto from "../Assets/AboutPhoto.jpeg";

function AboutWindows() {
  return (
    <div id="About">
      <div class="container paragraph">
        <div class="left-section">
          <div class="left-item">
            <h2>About</h2>
          </div>
          <div class="left-item">
            <img
              src={AboutPhoto}
              alt="image"
              height={500}
              className="AboutPhoto"
            />
          </div>
        </div>

        <div class="right-section">
          <div class="right-item">
            <p>
              <h3>College Senior</h3>I am an economics major striving to be an
              analytical economist.
            </p>
          </div>
          <div class="right-item">
            <p>
              <h3>Proficiency</h3>Exel, Data Analytics, Spanish , English.
            </p>
          </div>
          <div class="right-item">
            <p>
              <h3>PWC</h3>An internal Consultant and was able to obtain
              investors for a STEM organization for woman of color beween ages
              of 12-18.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutWindows;

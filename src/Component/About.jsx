import React from "react";
import briefcase from "../Assets/briefcase.png";

function About() {
  return (
    <div className="par">
      <h1 className="hi">Hi, I'am Xochitl Flores</h1>
      <div className="content-wrapper">
        <p className="paragraph">
          Im an Economics Major and Accounting Minor at Hunter College, I have a
          strong foundation of Behavioral Economics, International Trade, and
          economic policy. My academic training, combined with
          hands-on-experience in Consulting and Business Management has prepared
          me to contribute effective in Non-Profit Organizations. I'm passionate
          about providing a fundamental easy and efficient environment for the
          community through quick financial, and ecological changes happening in
          society. My goal is to expand my analytical skills, and continue to
          pursue my passion for starting my own non-profit organization.
        </p>
        <img className="briefcase" src={briefcase} alt="briefcase" />
      </div>
    </div>
  );
}

export default About;

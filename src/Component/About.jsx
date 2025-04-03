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
          society. While I may not have direct experience in business and fashion, I am eager to learn and apply my skills in new ways. My background in marketing and consulting has given me a strong foundation in strategy, consumer engagement, and problem-solving—skills that are highly transferable to the fashion industry. I am adaptable, quick to learn, and committed to understanding the nuances of the business. With my ability to analyze market trends, develop creative solutions, and work collaboratively, I am confident that I can contribute effectively while continuously expanding my knowledge in this field.
        </p>
        <img className="briefcase" src={briefcase} alt="briefcase" />
      </div>
    </div>
  );
}

export default About;

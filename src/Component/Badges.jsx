import React from "react";
import Phone from "../Assets/phoneIcon.png";
import Mail from "../Assets/mailIcon.png";
import LinkIn from "../Assets/linkinIcon.png";

function Badges() {
  return (
    <div>
      <div className="Contact" id="Contact">
        <a className="space" href="tel:+347670880">
          <img className="contactPhoto" src={Phone} />
          Phone
        </a>
        <a className="space" href="mailto:xochitlflores0629@gmail.com">
          <img className="contactPhoto" src={Mail} />
          Email
        </a>
        <a
          className="space"
          href="https://www.linkedin.com/in/xochitl-flores-184862234/"
        >
          <img className="contactPhoto" src={LinkIn} />
          LinkIn
        </a>
      </div>
    </div>
  );
}

export default Badges;

import React from "react";
import People from "../../images/people.png";
import AI from "../../images/ai.png";

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={People} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        <div className="gpt3__header-image">
          <img src={AI} alt="headerImage" />
        </div>
      </div>
    </div>
  );
};

export default Header;

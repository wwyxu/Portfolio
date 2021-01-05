import React from "react";
import selfpic from "../img/selfpic.jpg";

const About = () => (
  <div id="about" className="container p-5 about">
    <div className="row justify-content-center mb-4">
      <div className="column">
        <h2 className="heading font-weight-bold pb-1 text-center section_heading">
          About
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-10">
        <p className="text-secondary">
          I am a full stack software developer who creates applications for web
          and mobile, i am also proficient in computer diagnosis and repairs. I
          enjoy tinkering/problem solving and believe this is the root of my
          passion for programming and hardware. Outside of tech, i enjoy playing
          classical and jazz music on the piano, badminton and watching tennis.
        </p>
        <hr />
        <div className="row"></div>
        <p className="text">
          Name: <a className="text-secondary">William Xu</a>
        </p>
        <p className="text">
          Email: <a className="text-secondary">william-xu@live.com.au</a>
        </p>
        <p className="text">
          From: <a className="text-secondary">Melbourne, Australia</a>
        </p>
      </div>
      <div className="col-md-2 d-none d-lg-block mt-2">
        <img
          className="rounded mr-3"
          style={{ width: "100%" }}
          src={selfpic}
        ></img>
      </div>
    </div>
  </div>
);

export default About;

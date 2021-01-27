import React from "react";

const About = () => (
  <div>
    <span className="anchor"></span>
    <div className="container p-5">
      <div className="row justify-content-center my-3 mb-4">
        <div className="column pb-1">
          <h2 className="heading font-weight-bold text-center section_heading">
            About
          </h2>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 p-0">
          <h5 className="font-weight-bold my-3">
            I am William Xu, a full stack web and mobile developer.
          </h5>
          <p></p>
          <p className="text-secondary">
            I am a software developer based in Melbourne, Australia who builds
            web applications with React and Node.js. I am very fond of
            tinkering/problem solving and believe this is the root of my passion
            for programming and computer repairs. Outside of tech, my hobbies
            include playing classical and jazz music on the piano, reading about
            lore and playing badminton.
          </p>
          <p
            className="in_touch"
            type="button"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
          >
            Get in touch
          </p>
          <hr />
          <div className="row"></div>
          <p className="text">
            <div id="chevron-arrow-right" className="mr-1"></div>
            {"   "}Name: <a className="text-secondary">William Xu</a>
          </p>
          <p className="text">
            <div id="chevron-arrow-right" className="mr-1"></div> {"   "}
            Email:{" "}
            <a
              href="mailto: william-xu@live.com.au"
              className="text-secondary nodecor"
            >
              william-xu@live.com.au
            </a>
          </p>
          <p className="text">
            <div id="chevron-arrow-right" className="mr-1"></div> {"   "}
            From: <a className="text-secondary">Melbourne, Australia</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;

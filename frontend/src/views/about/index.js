import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import avatar from "../../assets/img/avatar.png";
import Anchor from "../common/anchor";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 150,
      duration: 800,
    });
  }, []);

  return (
    <>
      <Anchor />
      <div className="container p-5">
        <div className="row justify-content-center my-3 mb-4">
          <div className="column pb-1">
            <h2
              data-aos="fade-left"
              className="heading font-weight-bold pb-1 text-center section_heading"
            >
              About
            </h2>
          </div>
        </div>
        <div data-aos="fade-right" className="row mt-4">
          <div className="col-md-10 p-0">
            <h5 className="font-weight-bold my-3">
              I am William Xu, a full stack software developer.
            </h5>
            <p></p>
            <p className="text-secondary">
              I am a software developer living in Melbourne, Australia. My core
              competency is creating web applications with React, TypeScript,
              Node.js and Java. I am a naturally curious invidual who is fond of
              tinkering and solving problems. I believe this to be the root of
              my passion for tech.
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
          <div className="col-md-2">
            <img
              className="rounded"
              src={avatar}
              width="150"
              alt="Avatar"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

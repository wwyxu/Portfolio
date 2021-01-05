import React from "react";

const Landing = () => (
  <div id="landing" className="main-container container-fluid">
    <div className="container navigation pb-3">
      <div className="row justify-content-center">
        <div className="column mt-1">
          <a href="#about" className="text-white navigation-link">
            About
          </a>
        </div>
        <div className="column mt-1">
          <a href="#projects" className="text-white navigation-link ml-5">
            Projects
          </a>
        </div>
        <div className="column mt-1">
          <a href="#skills" className="text-white navigation-link ml-5">
            Skills
          </a>
        </div>
        <div className="column mt-1">
          <a href="#contact" className="text-white navigation-link ml-5">
            Contact
          </a>
        </div>
      </div>
    </div>
    <div className="secondary-container container">
      <div className="row main_row">
        <div className="col-12 text-center">
          <h2 className="text-white">
            Hello, I'm <strong className="font-weight-bold">William Xu</strong>.
          </h2>
          <h1 className="text-white">
            I Write Code<a className="blink">_</a>
          </h1>
          <hr />
          <ul>
            <a href="https://www.github.com" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;

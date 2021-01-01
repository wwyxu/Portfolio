import React from "react";

const Landing = () => (
  <div id="landing" className="main-container container-fluid">
    <div className="container navigation pb-3">
      <div className="row">
        <div className="col-12 pt-3 text-center">
          <a href="#about" className="text-white navigation-link">
            About
          </a>

          <a href="#projects" className="text-white navigation-link">
            Projects
          </a>

          <a href="#skills" className="text-white navigation-link">
            Skills
          </a>

          <a href="#contact" className="text-white navigation-link">
            Contact
          </a>
        </div>
      </div>
    </div>
    <div className="secondary-container container">
      <div className="row main_row">
        <div className="col-12 text-center">
          <h2 className="text-white">Hello, I'm</h2>
          <h1 className="text-white display-3">
            <strong className="font-weight-bold">William Xu</strong>
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

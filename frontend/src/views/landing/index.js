import React from "react";

const Landing = () => (
  <div className="main-container container-fluid">
    <div className="secondary-container container">
      <div className="row main_row">
        <div className="col-12 text-center">
          <h2 className="text-white">
            Hi, I'm{" "}
            <strong className="font-weight-bold name_heading">
              William Xu
            </strong>
            .
          </h2>
          <h1 className="text-white">
            I Write Code<a className="blink">_</a>
          </h1>
          <hr />
          <ul>
            <i className="fab fa-js text-white" />
            <i className="fab fa-react pl-2 text-white" />
            <i className="fab fa-node pl-2 text-white" />
            <a href="https://github.com/wwyxu" target="_blank">
              <i className="fab fa-github pl-2" />
            </a>
            <i className="fab fa-bootstrap pl-2 text-white" />
            <i className="fab fa-java pl-2 text-white" />
            <i className="fas fa-database pl-2 text-white" />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;

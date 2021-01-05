import React from "react";
import skills1 from "../img/skills1.png";
import skills2 from "../img/skills2.png";
import skills3 from "../img/skills3.jpg";
import skills5 from "../img/skills5.jpg";
import skills6 from "../img/skills6.png";
import skills7 from "../img/skills7.png";

const Skills = () => (
  <div className="skill-container container-fluid">
    <div id="skills" className="container pt-5 px-5">
      <div className="row justify-content-center mb-4">
        <div className="column">
          <h2 className="heading font-weight-bold pb-1 text-center section_heading">
            Skills
          </h2>
        </div>
      </div>
      <div className="row pb-1">
        <div className="card-deck">
          <div
            className="card shadow-sm text-center"
            style={{ marginBottom: "30px" }}
          >
            <div className="card-body">
              <img
                className="rounded"
                src={skills1}
                style={{ marginBottom: "10px" }}
                width="100"
              ></img>
              <h5 className="card-title">Front End Development</h5>
              <p className="card-text text-secondary">
                I use HTML, CSS and JavaScript to build the frontend of my
                websites, see the projects section for examples.
              </p>
            </div>
          </div>
          <div
            className="card shadow-sm text-center"
            style={{ marginBottom: "30px" }}
          >
            <div className="card-body">
              <img
                className="rounded"
                src={skills2}
                style={{ marginBottom: "10px" }}
                width="100"
              ></img>
              <h5 className="card-title">Bootstrap</h5>
              <p className="card-text text-secondary">
                The look and feel is critical to any project. I utilize
                bootstrap to create elegant website designs.
              </p>
            </div>
          </div>
          <div
            className="card shadow-sm text-center"
            style={{ marginBottom: "30px" }}
          >
            <div className="card-body">
              <img
                className="rounded"
                src={skills3}
                style={{ marginBottom: "10px" }}
                width="100"
              ></img>
              <h5 className="card-title">React</h5>
              <p className="card-text text-secondary">
                React allows me to create responsive user interfaces. Depending
                on the scale, i combine this with redux.
              </p>
            </div>
          </div>
        </div>
        <div className="card-deck" style={{ marginBottom: "30px" }}>
          <div
            className="card shadow-sm text-center"
            style={{ marginBottom: "30px" }}
          >
            <div className="card-body">
              <img
                className="rounded"
                src={skills5}
                style={{ marginBottom: "10px" }}
                width="100"
              ></img>
              <h5 className="card-title">Node.js</h5>
              <p className="card-text text-secondary">
                Node.js/Express allows my projects to connect with databases and
                handle http requests and responses.
              </p>
            </div>
          </div>
          <div
            className="card shadow-sm text-center"
            style={{ marginBottom: "30px" }}
          >
            <div className="card-body">
              <img
                className="rounded"
                src={skills6}
                style={{ marginBottom: "10px" }}
                width="100"
              ></img>
              <h5 className="card-title">MongoDB</h5>
              <p className="card-text text-secondary">
                I use MongoDB as the database of my web applications. I am
                proficient in schema design, querying and JSON.
              </p>
            </div>
          </div>
          <div
            className="card shadow-sm text-center"
            style={{ marginBottom: "30px" }}
          >
            <div className="card-body">
              <img
                className="rounded"
                src={skills7}
                style={{ marginBottom: "10px" }}
                width="100"
              ></img>
              <h5 className="card-title">Java</h5>
              <p className="card-text text-secondary">
                I use java for general purpose programming and android
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;

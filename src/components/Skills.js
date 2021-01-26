import React from "react";
import skills1 from "../img/skills1.jpg";
import skills2 from "../img/skills2.png";
import skills3 from "../img/skills3.jpg";
import skills5 from "../img/skills5.jpg";
import skills6 from "../img/skills6.jpg";
import skills7 from "../img/skills7.png";

const Skills = () => (
  <div>
    <span className="anchor"></span>
    <div className="skill-container container-fluid">
      <div className="container p-5">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="column pb-1">
            <h2 className="heading font-weight-bold pb-1 text-center section_heading">
              Skills
            </h2>
          </div>
        </div>
        <div className="row mt-4 pt-3">
          <div className="col-md-12 p-0">
            <p className="text-secondary">
              I have listed the key technologies i use on the cards below. Other
              technologies i use include:
            </p>
          </div>
          <div className="container-fluid">
            <div className="row p-0 mb-1">
              <div className="col-sm-4 col-6">
                <ul className="p-0 m-0">
                  <li className="text">
                    <div id="chevron-arrow-right" className="mr-1"></div>
                    {"   "}React Native
                  </li>
                  <li className="text">
                    <div id="chevron-arrow-right" className="mr-1"></div>
                    {"   "}Expo
                  </li>
                  <li className="text">
                    <div id="chevron-arrow-right" className="mr-1"></div>
                    {"   "}Redux (Thunk)
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-6">
                <ul>
                  <li className="text">
                    <div id="chevron-arrow-right" className="mr-1"></div>
                    {"   "}TypeScript
                  </li>
                  <li className="text">
                    <div id="chevron-arrow-right" className="mr-1"></div>
                    {"   "}JSON
                  </li>
                  <li className="text">
                    <div id="chevron-arrow-right" className="mr-1"></div>
                    {"   "}GraphQL
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-6">
                <ul>
                  <li className="text">
                    <div id="chevron-arrow-right" className="mr-1"></div>
                    {"   "}GIT
                  </li>
                  <li className="text">
                    <div id="chevron-arrow-right" className="mr-1"></div>
                    {"   "}XML
                  </li>
                  <li className="text">
                    <div id="chevron-arrow-right" className="mr-1"></div>
                    {"   "}SQLite
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-1 skill-fade">
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
                  alt="front end developement"
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
                  alt="bootstrap"
                ></img>
                <h5 className="card-title">Bootstrap</h5>
                <p className="card-text text-secondary">
                  The look and feel is critical to any project. I utilize
                  bootstrap to create elegant website designs which work on
                  mobile and desktop.
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
                  alt="react"
                ></img>
                <h5 className="card-title">React</h5>
                <p className="card-text text-secondary">
                  Lag free interaction is one of my highest priorities, react
                  allows me to create fast and responsive user interfaces.
                </p>
              </div>
            </div>
          </div>
          <div className="card-deck">
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
                  alt="node.js"
                ></img>
                <h5 className="card-title">Node.js</h5>
                <p className="card-text text-secondary">
                  I am adept with Node.js and Express, I use these technologies
                  to manage the server side logic of my applications.
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
                  alt="database"
                ></img>
                <h5 className="card-title">Database</h5>
                <p className="card-text text-secondary">
                  I am proficient in schema design and querying with relational
                  and non-relational databases. I use MongoDB and PostgreSQL.
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
                  alt="java"
                ></img>
                <h5 className="card-title">Java</h5>
                <p className="card-text text-secondary">
                  Java was the first language i learnt through the Oracle Java
                  Tutorials. I use it for coding challenges and android
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;

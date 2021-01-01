import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import skills1 from "../img/skills1.png";
import skills2 from "../img/skills2.png";
import skills3 from "../img/skills3.jpg";
import skills4 from "../img/skills4.png";
import skills5 from "../img/skills5.jpg";
import skills6 from "../img/skills6.jpg";
import skills7 from "../img/skills7.jpg";
import skills8 from "../img/skills8.jpg";
import skills9 from "../img/skills9.png";
import skills10 from "../img/skills10.png";
import skills11 from "../img/skills11.png";
import skills12 from "../img/skills12.png";

const Skills = () => (
  <div className="skill-container container-fluid">
    <div id="skills" className="container pt-5 px-5">
      <div className="container-fluid">
        <h3 className="heading font-weight-bold pb-3 text-white">Skills</h3>
        <div className="pb-3">
          <div className="row">
            <div className="column pl-2">
              <img
                src={skills1}
                className="rounded pl-2"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills2}
                className="rounded pl-2"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills3}
                className="rounded pl-2"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills4}
                className="rounded pl-2"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills5}
                className="rounded pl-2"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills6}
                className="rounded pl-2"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills7}
                className="rounded pl-2"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills8}
                className="rounded pl-2"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills9}
                className="rounded pl-2"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills10}
                className="rounded"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills11}
                className="rounded"
                width="50"
                alt="..."
              ></img>
            </div>
            <div className="column">
              <img
                src={skills12}
                className="rounded"
                width="50"
                alt="..."
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 pb-5">
          <p className="text-secondary text-white-50">
            Tech has been a lifelong passion for me, i built my first computer
            almost 10 years ago and have been hooked ever since. I have
            developed my computer diagnosis and repair skills thoroughly through
            the years.
          </p>
          <p className="text-secondary text-white-50">
            My programming journey began 2.5 years ago. I started by learning
            the fundamentals of object oriented programming and syntax through
            the Oracle Java Tutorials. After I had grasped the essentials
            thorougly, i moved on to android developement and then web. Coming
            from a Java/Android/XML background, creating web applications with
            MERN was a natural transition. I strive to create software I would
            use for myself. Please see below for examples of projects i have
            created.
          </p>
        </div>
        <div className="col-8 pl-5 text-white">
          <p>HTML</p>
          <ProgressBar className="my-3" variant="info" now={85} />
          <p>CSS | Bootstrap</p>
          <ProgressBar className="my-3" variant="info" now={70} />
          <p>JavaScript (ES6) | MERN | Redux | JSON</p>
          <ProgressBar className="my-3" variant="info" now={82} />
          <p>Java | Android | XML | SQLite</p>
          <ProgressBar className="my-3" variant="info" now={77} />
          <p>Computer Repairs | Diagnosis</p>
          <ProgressBar className="my-3" variant="info" now={90} />
        </div>
      </div>
    </div>
  </div>
);

export default Skills;

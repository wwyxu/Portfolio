import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import blog1 from "../../assets/img/blog1.png";
import blog2 from "../../assets/img/blog2.png";
import blog3 from "../../assets/img/blog3.png";
import bmi1 from "../../assets/img/bmi.png";
import bmi2 from "../../assets/img/bmi2.png";
import bugtracker1 from "../../assets/img/bugtracker1.png";
import bugtracker2 from "../../assets/img/bugtracker2.png";
import bugtracker3 from "../../assets/img/bugtracker3.png";
import nodemailer1 from "../../assets/img/nodemailer.jpg";
import technews1 from "../../assets/img/technews1.png";
import technews2 from "../../assets/img/technews2.png";
import technews3 from "../../assets/img/technews3.png";
import static1 from "../../assets/img/static.jpg";
import tft from "../../assets/img/tft.jpg";
import form1 from "../../assets/img/form1.png";
import tft1 from "../../assets/img/tft1.png";
import tft2 from "../../assets/img/tft2.png";
import tft3 from "../../assets/img/tft3.png";
import userConfigurationSystem1 from "../../assets/img/user-configuration-system.png";
import ProjectModal from "./project-modal";
import ProjectCard from "./project-card";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 150,
      duration: 800,
    });
  }, []);

  const bugTrackerImages = [bugtracker1, bugtracker2, bugtracker3];
  const techNewsImages = [technews1, technews2, technews3];
  const blogImages = [blog1, blog2, blog3];
  const tftImages = [tft1, tft2, tft3];
  const bmiImages = [bmi1, bmi2];
  const nodeMailerImages = [nodemailer1];
  const formImages = [form1];
  const userConfigImages = [userConfigurationSystem1];

  const bugTrackerModal = (
    <ProjectModal
      id="bugtrackerModal"
      name="Bug Tracker"
      description="A software defect tracking system commonly known as a bug tracker. Users are able to sign-up, create projects, tickets, invite and tag other users. This software allows for users to submit tickets and those tickets are tracked through status from Open to Complete, ticket and project routes are protected to authorized users."
      project="https://mernbugtracker.herokuapp.com/"
      github="https://github.com/wwyxu/bug-tracker"
      stack="MongoDB, Mongoose, JWT, Node.js, Express.js, React (Classes), Redux, JavaScript, HTML, CSS,
    Bootstrap, Chart.js"
      img={bugTrackerImages}
    />
  );

  const techNewsModal = (
    <ProjectModal
      id="technewsModal"
      name="Tech News"
      description="This application fetches articles from The NYT Api. Users are able to cache articles to local storage for later viewing."
      project="https://tech-news-eight.vercel.app/"
      github="https://github.com/wwyxu/news"
      stack="React, TypeScript, HTML, CSS, Bootstrap"
      img={techNewsImages}
    />
  );

  const blogModal = (
    <ProjectModal
      id="blogModal"
      name="Blog"
      description="A blogging application developed with React and PostgreSQL. Supports authentication with JWT, protected routing and create, read, update, delete functionality."
      github="https://github.com/wwyxu/blog"
      stack="PostgreSQL, JWT, Node.js, Express.js, React (Hooks), JavaScript, HTML,
    CSS, Bootstrap"
      img={blogImages}
    />
  );

  const tftModal = (
    <ProjectModal
      id="mobileModal"
      name="Teamfight Tactics Items"
      github="https://github.com/wwyxu/tft-items"
      stack="Java, Android, XML, SQLite, Photoshop, GIMP"
      img={tftImages}
      vertical={true}
    />
  );

  const calcModal = (
    <ProjectModal
      id="calcModal"
      name="BMI Tracker"
      description="BMI Tracker offers an simply way to track your BMI. Progress and data is stored locally on a users device."
      project="https://bmi-tracker.vercel.app/"
      github="https://github.com/wwyxu/bmi.git"
      stack="React (Hooks), TypeScript, HTML, CSS, Bootstrap"
      img={bmiImages}
    />
  );

  const nodeMailerModal = (
    <ProjectModal
      id="nodeMailerModal"
      name="Nodemailer Contact Form"
      description="A contact form using google auth
      refresh tokens, google API and the nodemailer module for Node.js."
      github="https://github.com/wwyxu/nodemailer-form"
      stack="Node.js, Express.js, Bootstrap, React (Hooks)"
      img={nodeMailerImages}
    />
  );

  const formModal = (
    <ProjectModal
      id="formModal"
      name="Multi-Step Form"
      description="A multi-step registration form which promotes decoupling between steps through a mediator."
      github="https://github.com/wwyxu/multi-step-form"
      stack="TypeScript, MongoDB, Mongoose, Node.js, Express.js, Bootstrap, React (Hooks)"
      img={formImages}
    />
  );

  const userConfigModal = (
    <ProjectModal
      id="userConfigModal"
      name="User Configuration System"
      description="Saves user information in JSON format, coded in 3.5 hours."
      github="https://github.com/wwyxu/user-configuration-system"
      stack="Node.js, MongoDB, JavaScript, Express.js, React (Hooks), Bootstrap, CSS"
      img={userConfigImages}
    />
  );

  return (
    <>
      {bugTrackerModal}
      {techNewsModal}
      {blogModal}
      {tftModal}
      {calcModal}
      {nodeMailerModal}
      {formModal}
      {userConfigModal}
      <div id="trigger-up2" />
      <span className="anchor" />
      <div className="container p-5 mb-4">
        <div className="row justify-content-center my-3">
          <div className="column pb-1">
            <h2
              data-aos="fade-left"
              className="heading font-weight-bold pb-1 text-center section_heading"
              data-aos-anchor="#trigger-up2"
              data-aos-anchor-placement="center-center"
            >
              Projects
            </h2>
          </div>
        </div>
        <div className="row mt-4 pt-3">
          <div className="card-deck project-shadow">
            <div className="card-deck">
              <ProjectCard
                delay={0}
                img={bugtracker1}
                target="#bugtrackerModal"
              />
              <ProjectCard
                delay={100}
                img={technews1}
                target="#technewsModal"
              />
              <ProjectCard delay={200} img={form1} target="#formModal" />
            </div>
          </div>
          <div className="card-deck project-shadow">
            <div className="card-deck">
              <ProjectCard delay={300} img={tft} target="#mobileModal" />
              <ProjectCard delay={400} img={bmi1} target="#calcModal" />
              <ProjectCard
                delay={500}
                img={nodemailer1}
                target="#nodeMailerModal"
              />
            </div>
          </div>
          <div className="card-deck project-shadow">
            <div className="card-deck">
              <ProjectCard delay={500} img={blog1} target="#blogModal" />
              <ProjectCard
                delay={600}
                img={userConfigurationSystem1}
                target="#userConfigModal"
              />
              <div
                className="card m-0"
                data-aos="fade-up"
                data-aos-anchor="#trigger-up2"
                data-aos-anchor-placement="center-center"
                data-aos-delay={700}
              >
                <a className="img-top">
                  <div class="content">
                    <img className="card-img-top" src={static1}></img>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

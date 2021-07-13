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
import flip from "../../assets/img/flip.png";
import form1 from "../../assets/img/form1.png";
import news1 from "../../assets/img/news.png";
import news2 from "../../assets/img/news2.png";
import nodemailer1 from "../../assets/img/nodemailer.jpg";
import tft from "../../assets/img/tft.jpg";
import tft1 from "../../assets/img/tft1.png";
import tft2 from "../../assets/img/tft2.png";
import tft3 from "../../assets/img/tft3.png";
import userConfigurationSystem1 from "../../assets/img/user-configuration-system.png";
import Anchor from "../common/anchor";
import projectData from "./data";
import ProjectCard from "./project-card";
import ProjectModal from "./project-modal";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 150,
      duration: 800,
    });
  }, []);

  const bugTrackerImages = [bugtracker1, bugtracker2, bugtracker3];
  const newsImages = [news1, news2];
  const blogImages = [blog1, blog2, blog3];
  const tftImages = [tft1, tft2, tft3];
  const bmiImages = [bmi1, bmi2];
  const nodeMailerImages = [nodemailer1];
  const formImages = [form1];
  const userConfigImages = [userConfigurationSystem1];
  const flipImages = [flip];

  const imageExtractor = (type) => {
    switch (type) {
      case "bugTrackerModal":
        return bugTrackerImages;
      case "newsModal":
        return newsImages;
      case "blogModal":
        return blogImages;
      case "mobileModal":
        return tftImages;
      case "calcModal":
        return bmiImages;
      case "nodeMailerModal":
        return nodeMailerImages;
      case "formModal":
        return formImages;
      case "userConfigModal":
        return userConfigImages;
      case "flipModal":
        return flipImages;
      default:
        console.log("No image found");
    }
  };

  const modals = projectData.modals.map((modal) => (
    <ProjectModal
      id={modal.id}
      name={modal.name}
      description={modal.description}
      project={modal.project}
      github={modal.github}
      stack={modal.stack}
      img={imageExtractor(modal.id)}
      vertical={modal.vertical}
    />
  ));

  return (
    <>
      {modals}
      <div id="trigger-up2" />
      <Anchor />
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
                target="#bugTrackerModal"
              />
              <ProjectCard delay={100} img={news1} target="#newsModal" />
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
              <ProjectCard delay={700} img={flip} target="#flipModal" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

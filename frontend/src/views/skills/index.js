import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import skills1 from "../../assets/img/skills1.png";
import skills2 from "../../assets/img/skills2.png";
import skills3 from "../../assets/img/skills3.jpg";
import skills5 from "../../assets/img/skills5.jpg";
import skills6 from "../../assets/img/skills6.jpg";
import skills7 from "../../assets/img/skills7.png";
import SkillCard from "./skill-card";
import SkillList from "./skill-list";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  const skillList1 = [
    "JSON",
    "React Native",
    "Expo",
    "Python",
    "jQuery",
    "Next.js",
  ];
  const skillList2 = [
    "Object-Orrientated-Programming",
    "GraphQL",
    "Apollo",
    "Mongoose, TypeORM",
    "AWS",
    "Heroku",

  ];
  const skillList3 = [
    "Linux, Windows, Mac",
    "GIT",
    "Bash",
    "Shell",
    "Agile",
    "CD/CD",
  ];

  const listItems1 = skillList1.map((skill) => <SkillList name={skill} />);
  const listItems2 = skillList2.map((skill) => <SkillList name={skill} />);
  const listItems3 = skillList3.map((skill) => <SkillList name={skill} />);

  return (
    <>
      <div id="trigger-up" />
      <span className="anchor"/>
      <div className="skill-container container-fluid">
        <div className="container p-5">
          <div className="row justify-content-center mt-3 mb-4">
            <div className="column pb-1">
              <h2
                data-aos="fade-right"
                className="heading font-weight-bold pb-1 text-center section_heading"
                data-aos-anchor="#trigger-up"
                data-aos-anchor-placement="center-center"
              >
                Skills
              </h2>
            </div>
          </div>
          <div className="row mt-4 py-3">
            <div className="col-md-12 p-0">
              <p
                className="text-secondary"
                data-aos="fade-right"
                data-aos-anchor="#trigger-up"
                data-aos-anchor-placement="center-center"
              >
                I have listed the key technologies i use on the cards below.
                Other technologies i use include:
              </p>
            </div>
            <div className="container-fluid">
              <div className="row p-0 mb-1">
                <div
                  className="col-sm-4"
                  data-aos="flip-right"
                  data-aos-anchor="#trigger-up"
                  data-aos-anchor-placement="center-center"
                >
                  {listItems1}
                </div>
                <div
                  className="col-sm-4"
                  data-aos="flip-right"
                  data-aos-delay="200"
                  data-aos-anchor="#trigger-up"
                  data-aos-anchor-placement="center-center"
                >
                  {listItems2}
                </div>
                <div
                  className="col-sm-4"
                  data-aos="flip-right"
                  data-aos-delay="400"
                  data-aos-anchor="#trigger-up"
                  data-aos-anchor-placement="center-center"
                >
                  {listItems3}
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-1 skill-fade">
            <div className="card-deck">
              <SkillCard
                name="Front-End Development"
                delay={200}
                img={skills1}
                description="I use HTML, CSS and JavaScript(ES6+) or TypeScript to build the frontend of my
              applications."
              />
              <SkillCard
                name="Design"
                delay={200}
                img={skills2}
                description="The look and feel is critical to any project. I use
              Bootstrap to develop responsive web designs. Other tools I use include Atlaskit, XML, Styled Components, Semantic UI, Charkra UI, Photoshop and GIMP."
              />
              <SkillCard
                name="React"
                delay={200}
                img={skills3}
                description="Lag free interaction is one of my highest priorities, React
              allows me to create fast, interactive user interfaces. I am skilled in both class and hook components, as well
              redux for state management and using react/redux dev tool extensions."
              />
            </div>
            <div className="card-deck">
              <SkillCard
                name="Back-End Developement"
                delay={400}
                img={skills5}
                description="I use either Node.js with Express or Spring framework (Java)
                to create RESTful APIs. I primarily use JWT for authentication and Postman/Chrome Devtools for debugging and testing."
              />
              <SkillCard
                name="Databases"
                delay={400}
                img={skills6}
                description="I am adept in schema design and querying with relational and
              non-relational databases. I use MongoDB, SQLite and PostgreSQL."
              />
              <SkillCard
                name="Testing"
                delay={400}
                img={skills7}
                description="Testing is essential for the developement of any robust application. 
                I use Jest, Mocha and Spring Test Framework to create automated tests."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

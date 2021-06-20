import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import About from "./views/about";
import Contact from "./views/contact";
import Landing from "./views/landing";
import Loader from "./views/loader";
import Projects from "./views/projects";
import Skills from "./views/skills";

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const App = () => {
  const [load, setLoad] = useState(true);
  const [visibleSection, setVisibleSection] = useState(null);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);

  const headerRef = useRef(null);
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "Landing", ref: landingRef },
    { section: "About", ref: aboutRef },
    { section: "Skills", ref: skillsRef },
    { section: "Projects", ref: projectsRef },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1200);

    window.scrollY === 0 ? setTop(true) : setTop(false);

    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY + 300) >=
        document.documentElement.scrollHeight;
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      bottom ? setBottom(true) : setBottom(false);

      const selected = sectionRefs.find(({ ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection, sectionRefs]);

  return (
    <>
      <Loader load={load} />
      <div className="fixed d-none d-sm-block" id={load ? "no-scroll" : ""}>
        <div className="header" ref={headerRef}>
          <div
            type="button"
            className={`header_link ${
              visibleSection === "Landing" || top === true ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(landingRef.current);
            }}
          >
            Home
          </div>
          <div
            type="button"
            className={`header_link ${
              visibleSection === "About" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(aboutRef.current);
            }}
          >
            About
          </div>
          <div
            type="button"
            className={`header_link ${
              visibleSection === "Skills" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(skillsRef.current);
            }}
          >
            Skills
          </div>
          <div
            type="button"
            className={`header_link ${
              visibleSection === "Projects" && bottom === false
                ? "selected"
                : ""
            }`}
            onClick={() => {
              scrollTo(projectsRef.current);
            }}
          >
            Projects
          </div>
          <div
            type="button"
            className={`header_link ${bottom === true ? "selected" : ""}`}
            onClick={() => {
              scrollTo(contactRef.current);
            }}
          >
            Contact
          </div>
        </div>
      </div>
      <div className="section" id="Landing" ref={landingRef}>
        <Landing />
      </div>
      <div className="section" id="About" ref={aboutRef}>
        <About />
      </div>
      <div className="section" id="Skills" ref={skillsRef}>
        <Skills />
      </div>
      <div className="section" id="Projects" ref={projectsRef}>
        <Projects />
      </div>
      <div className="v_styling"></div>
      <div className="section" id="Contact" ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./style.css";

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

function App() {
  const [visibleSection, setVisibleSection] = useState();
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
    if (window.scrollY === 0) {
      setTop(true);
    } else {
      setTop(false);
    }

    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;

      if (bottom) {
        setBottom(true);
      } else if (!bottom) {
        setBottom(false);
      }

      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
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
    <div className="App">
      <div className="fixed d-none d-sm-block">
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
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

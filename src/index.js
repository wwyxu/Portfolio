import React from "react";
import ReactDOM from "react-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
//import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

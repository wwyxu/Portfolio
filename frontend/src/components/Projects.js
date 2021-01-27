import React from "react";
import bugtracker1 from "../img/bugtracker1.png";
import bugtracker2 from "../img/bugtracker2.png";
import bugtracker3 from "../img/bugtracker3.png";
import bugtracker4 from "../img/bugtracker4.png";
import bugtracker5 from "../img/bugtracker5.png";
import tft from "../img/tft.jpg";
import tft1 from "../img/tft1.jpg";
import tft2 from "../img/tft2.jpg";
import tft3 from "../img/tft3.jpg";
import tft4 from "../img/tft4.jpg";
import tft5 from "../img/tft5.jpg";
import technews1 from "../img/technews1.png";
import technews2 from "../img/technews2.png";
import technews3 from "../img/technews3.png";
import bmi from "../img/bmi.png";
import bmi2 from "../img/bmi2.png";
import nodemailer from "../img/nodemailer.jpg";
import blog from "../img/blog.png";

const Projects = () => (
  <div>
    <span className="anchor"></span>
    <div className="container p-5 mb-4">
      <div className="row justify-content-center my-3">
        <div className="column pb-1">
          <h2 className="heading font-weight-bold pb-1 text-center section_heading">
            Projects
          </h2>
        </div>
      </div>
      <div className="row mt-4 pt-3">
        <div className="card-deck project-shadow">
          <p className="text-secondary">
            Note: Apps hosted on Heroku will go to "sleep" after 30 minutes of
            inactivity, please be patient as the application is waking up from
            idle.
          </p>
          <div className="card-deck">
            <div className="card" style={{ marginBottom: "30px" }}>
              <div data-toggle="modal" data-target="#bugtrackerModal">
                <a className="card-img-top">
                  <div class="content">
                    <img className="card-img-top" src={bugtracker5}></img>
                    <div class="content-overlay"></div>
                    <div class="content-details fadeIn-bottom">
                      <h5 type="button">Screenshots</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Bug Tracker</h5>
                <p className="card-text text-secondary">
                  A software defect tracking system created with the MERN stack.
                  Users area able sign-up, create projects and invite other
                  users. This software allows for users to submit tickets and
                  those tickets are tracked through status from Open to
                  Complete, ticket and project routes are protected to
                  authorized users.
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mernbugtracker.herokuapp.com/"
                    type="button"
                    className="btn btn-info mr-2"
                  >
                    Project <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/wwyxu/Bug-Tracker"
                    type="button"
                    className="btn btn-dark"
                  >
                    GitHub <i className="fas fa-external-link-alt"></i>
                  </a>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted small-text">
                  MongoDB, Node.js, Express.js, React, Redux, Javascript, HTML,
                  CSS, Bootstrap
                </small>
              </div>
            </div>

            <div className="card" style={{ marginBottom: "30px" }}>
              <div data-toggle="modal" data-target="#technewsModal">
                <a className="card-img-top">
                  <div class="content">
                    <img className="card-img-top" src={technews1}></img>
                    <div class="content-overlay"></div>
                    <div class="content-details fadeIn-bottom">
                      <h5 type="button">Screenshots</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Tech News App</h5>
                <p className="card-text text-secondary">
                  This react hooks application utilizes The New York Times News
                  API and maps tech articles to a paginated view. Through local
                  storage, users are able to favorite articles of interest for
                  later viewing.
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://tech-news-eight.vercel.app/"
                    type="button"
                    className="btn btn-info mr-2"
                  >
                    Project <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/wwyxu/NYT-Tech-News"
                    type="button"
                    className="btn btn-dark"
                  >
                    GitHub <i className="fas fa-external-link-alt"></i>
                  </a>
                </p>
              </div>
              <div class="card-footer ">
                <small className="text-muted small-text">
                  React, Javascript, HTML, CSS, Bootstrap
                </small>
              </div>
            </div>

            <div className="card" style={{ marginBottom: "30px" }}>
              <div data-toggle="modal" data-target="#blogModal">
                <a className="card-img-top">
                  <div class="content">
                    <img className="card-img-top" src={blog}></img>
                    <div class="content-overlay"></div>
                    <div class="content-details fadeIn-bottom">
                      <h5 type="button">Screenshots</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">PERN Blog</h5>
                <p className="card-text text-secondary">
                  A full stack application created with the PERN stack. Utilizes
                  hooks and async/try & catch syntax. Supports authentication
                  with JWT, authorized only routing and create, read, update,
                  delete functionality.
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/wwyxu/PERN-Blog-Boiler-Plate"
                    type="button"
                    className="btn btn-dark"
                  >
                    GitHub <i className="fas fa-external-link-alt"></i>
                  </a>
                </p>
              </div>
              <div class="card-footer ">
                <small className="text-muted small-text">
                  PostgreSQL, Node.js, Express.js, React, Javascript, HTML, CSS,
                  Bootstrap
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="card-deck project-shadow">
          <div className="card-deck">
            <div className="card" style={{ marginBottom: "30px" }}>
              <div data-toggle="modal" data-target="#mobileModal">
                <a className="card-img-top">
                  <div class="content">
                    <img className="card-img-top" src={tft}></img>
                    <div class="content-overlay"></div>
                    <div class="content-details fadeIn-bottom">
                      <h5 type="button">Screenshots</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Teamfight Tactics Items</h5>
                <p className="card-text text-secondary">
                  An android application for the popular auto-chess strategy
                  game, Teamfight Tactics. Users are able filter and query
                  information from a SQLite database.
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://drive.google.com/drive/folders/1Fpa89QveekBv4j_so2ZXna9WiO43zBsG?usp=sharing"
                    type="button"
                    className="btn btn-info mr-2"
                  >
                    Project <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/wwyxu/Teamfight-Tactics-Items"
                    type="button"
                    className="btn btn-dark"
                  >
                    GitHub <i className="fas fa-external-link-alt"></i>
                  </a>
                </p>
              </div>
              <div class="card-footer">
                <small className="text-muted small-text">
                  Java, Android, XML, SQLite, Photoshop, GIMP
                </small>
              </div>
            </div>

            <div className="card" style={{ marginBottom: "30px" }}>
              <div data-toggle="modal" data-target="#calcModal">
                <a className="card-img-top">
                  <div class="content">
                    <img className="card-img-top" src={bmi}></img>
                    <div class="content-overlay"></div>
                    <div class="content-details fadeIn-bottom">
                      <h5 type="button">Screenshots</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">BMI Tracker</h5>
                <p className="card-text text-secondary">
                  A react hooks application which calculates BMI in real time,
                  users are able to keep track their progress by logging data to
                  local storage on their device. Implements dark & light modes.
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://bmi-tracker.vercel.app/"
                    type="button"
                    className="btn btn-info mr-2"
                  >
                    Project <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/wwyxu/BMI-Calculator"
                    type="button"
                    className="btn btn-dark"
                  >
                    GitHub <i className="fas fa-external-link-alt"></i>
                  </a>
                </p>
              </div>
              <div class="card-footer">
                <small className="text-muted small-text">
                  React, Javascript, HTML, CSS, Bootstrap
                </small>
              </div>
            </div>

            <div className="card" style={{ marginBottom: "30px" }}>
              <div data-toggle="modal">
                <a className="card-img-top">
                  <div class="content">
                    <img className="card-img-top" src={nodemailer}></img>
                    <div class="content-overlay"></div>
                    <div class="content-details fadeIn-bottom"></div>
                  </div>
                </a>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Nodemailer Contact Form</h5>
                <p className="card-text text-secondary">
                  A contact form implementation which utilizes google auth
                  refresh tokens and Nodemailer, a module for Node.js.
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/wwyxu/Google-Auth-Nodemailer"
                    type="button"
                    className="btn btn-dark"
                  >
                    GitHub <i className="fas fa-external-link-alt"></i>
                  </a>
                </p>
              </div>
              <div class="card-footer">
                <small className="text-muted small-text">
                  Node.js, Express.js, Bootstrap, React
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="bugtrackerModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="text">Bug Tracker</div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div
                id="carouselIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#carouselIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselIndicators" data-slide-to="3"></li>
                  <li data-target="#carouselIndicators" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={bugtracker5}
                      alt="First Slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={bugtracker1}
                      alt="Second Slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={bugtracker2}
                      alt="Third Slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={bugtracker3}
                      alt="Fourth Slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={bugtracker4}
                      alt="Fifth Slide"
                    ></img>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="mobileModal">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <div className="text">Teamfight Tactics Items</div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div
                id="carouselIndicators2"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselIndicators2"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#carouselIndicators2" data-slide-to="1"></li>
                  <li data-target="#carouselIndicators2" data-slide-to="2"></li>
                  <li data-target="#carouselIndicators2" data-slide-to="3"></li>
                  <li data-target="#carouselIndicators2" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={tft1}
                      alt="First Slide"
                    ></img>
                  </div>
                  <div class="carousel-item">
                    <img
                      className="d-block w-100"
                      src={tft2}
                      alt="Second Slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={tft3}
                      alt="Third Slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={tft4}
                      alt="Fourth Slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={tft5}
                      alt="Fifth Slide"
                    ></img>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselIndicators2"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselIndicators2"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="technewsModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="text">Tech News</div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div
                id="carouselIndicators3"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselIndicators3"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#carouselIndicators3" data-slide-to="1"></li>
                  <li data-target="#carouselIndicators3" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={technews1}
                      alt="First Slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={technews2}
                      alt="Second Slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={technews3}
                      alt="Third Slide"
                    ></img>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselIndicators3"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselIndicators3"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="calcModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="text">BMI Tracker</div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div
                id="carouselIndicators4"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselIndicators4"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#carouselIndicators4" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src={bmi}
                      alt="First Slide"
                    ></img>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src={bmi2}
                      alt="Second Slide"
                    ></img>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselIndicators4"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselIndicators4"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="blogModal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div className="text">PERN Blog</div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <img className="d-block w-100" src={blog} alt="First Slide"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;

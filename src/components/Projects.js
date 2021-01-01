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

const Projects = () => (
  <div id="projects" className="container">
    <div className="row p-5">
      <h3 className="mb-3 pb-3 text-white font-weight-bold">Projects</h3>
      <div className="card-deck">
        <div className="card">
          <div data-toggle="modal" data-target="#bugtrackerModal">
            <a>
              <img className="card-img-top" src={bugtracker4}></img>
            </a>
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
                      <li
                        data-target="#carouselIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselIndicators"
                        data-slide-to="2"
                      ></li>
                      <li
                        data-target="#carouselIndicators"
                        data-slide-to="3"
                      ></li>
                      <li
                        data-target="#carouselIndicators"
                        data-slide-to="4"
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          src={bugtracker4}
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
                          src={bugtracker5}
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
          <div className="card-body">
            <h5 className="card-title">Bug Tracker</h5>
            <p className="card-text text-secondary">
              A multi user web application developed with the MERN stack. Users
              can create projects, invite other users and assign tickets
              accordingly. Assists individuals and groups to track bugs during
              the development process.
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mernbugtracker.herokuapp.com/"
              >
                Demo <i className="fas fa-external-link-alt"></i>{" "}
              </a>
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted small-text">
              MongoDB, Node.js, Express.js, Passport.js, React, Redux,
              Javascript, HTML, CSS, Bootstrap, Postman
            </small>
          </div>
        </div>

        <div className="card">
          <div data-toggle="modal" data-target="#technewsModal">
            <a>
              <img className="card-img-top" src={technews2}></img>
            </a>
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
                      <li
                        data-target="#carouselIndicators3"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselIndicators3"
                        data-slide-to="2"
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          src={technews2}
                          alt="First Slide"
                        ></img>
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src={technews1}
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
                        class="carousel-control-prev-icon"
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
          <div className="card-body">
            <h5 className="card-title">Tech News App</h5>
            <p className="card-text text-secondary">
              A react application which fetches data from The New York Times
              News API and maps tech articles to cards.
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tech-news-eight.vercel.app/"
              >
                Demo <i className="fas fa-external-link-alt"></i>{" "}
              </a>
            </p>
          </div>
          <div class="card-footer ">
            <small className="text-muted small-text">
              React, Javascript, HTML, CSS, Bootstrap
            </small>
          </div>
        </div>
        <div className="card">
          <div data-toggle="modal" data-target="#mobileModal">
            <a>
              <img className="card-img-top" src={tft}></img>
            </a>
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
                <div class="modal-body">
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
                      <li
                        data-target="#carouselIndicators2"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselIndicators2"
                        data-slide-to="2"
                      ></li>
                      <li
                        data-target="#carouselIndicators"
                        data-slide-to="3"
                      ></li>
                      <li
                        data-target="#carouselIndicators"
                        data-slide-to="4"
                      ></li>
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
          <div className="card-body">
            <h5 className="card-title">Teamfight Tactics Items</h5>
            <p className="card-text text-secondary">
              An android application for the popular strategy game, Teamfight
              Tactics. Display, filter and query information about items,
              classes and other game data.
            </p>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tech-news-eight.vercel.app/"
              >
                Download <i className="fas fa-external-link-alt"></i>{" "}
              </a>
            </p>
          </div>
          <div class="card-footer">
            <small className="text-muted small-text">
              Java, Android, XML, SQLite, Photoshop, GIMP
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;

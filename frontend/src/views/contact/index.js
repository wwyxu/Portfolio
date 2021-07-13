import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Anchor from "../common/anchor";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    setResult({
      success: null,
    });
    const form = e.currentTarget;
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
    }
    setLoading(true);
    axios
      .post("/contact", { ...state })
      .then((res) => {
        setLoading(false);
        setResult(res.data);
        setState({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);
        setResult({
          success: false,
        });
      });
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <>
      <Anchor />
      <div className="contact-container">
        <div className="container p-5 text-white-50">
          <div className="row justify-content-center my-3">
            <div className="column pb-1">
              <h2
                data-aos="fade-right"
                data-aos-duration="800"
                className="contact_heading font-weight-bold pb-1 text-center"
              >
                Contact
              </h2>
            </div>
          </div>
          <p
            data-aos="fade-right"
            data-aos-duration="800"
            className="text-center mt-4 pt-3"
          >
            Feel free to email me or fill the enquiry form below to get in
            touch.
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="800"
            className="contact_sub text-center"
          >
            Email:{" "}
            <a
              href="mailto: william-xu@live.com.au"
              className="text-white-50 nodecor"
            >
              william-xu@live.com.au
            </a>
          </p>
          <form data-aos="zoom-in" data-aos-duration="500" onSubmit={sendEmail}>
            <div className="row no-gutters">
              <div className="col-6">
                <div className="form-group my-1 mr-1" controlId="name">
                  <input
                    className="form-control"
                    required
                    type="text"
                    name="name"
                    value={state.name}
                    placeholder="Name"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group my-1 ml-1" controlId="email">
                  <input
                    className="form-control"
                    required
                    type="text"
                    name="email"
                    value={state.email}
                    placeholder="Email"
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group my-2" controlId="message">
              <textarea
                className="form-control"
                required
                name="message"
                value={state.message}
                rows="5"
                style={{ resize: "none" }}
                placeholder="Message"
                onChange={onChange}
              />
            </div>
            {loading ? (
              <button className="btn btn-secondary mt-1">
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </button>
            ) : (
              <button className="btn btn-secondary mt-1 ">
                Submit{" "}
                {result && (
                  <i
                    className={`${
                      result.success ? "fas fa-check" : "fas fa-times"
                    } text-center`}
                  />
                )}
              </button>
            )}
          </form>
        </div>
        <div className="footer text-center text-white-50">
          <br />
          <p>
            <a href="https://dev.to/wwyxu" target="_blank">
              <i className="fab fa-dev mr-4" />
            </a>
            {/* <a href="https://codepen.io/wwyxu" target="_blank">
              <i className="fab fa-codepen"></i>
            </a> */}
            <a onClick={() => handleClick()} className="arrow" type="button">
              <i className="fas fa-arrow-circle-up" />
            </a>
            <a href="https://github.com/wwyxu " target="_blank">
              <i className="fab fa-github-square ml-4" />
            </a>
          </p>
          <p>
            <a>{"  "}William Xu</a> | &copy; 2021
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;

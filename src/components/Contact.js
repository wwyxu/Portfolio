import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    const form = e.currentTarget;
    setResult({
      success: null,
    });
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
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

  return (
    <div id="contact" className="contact-container container-fluid">
      <div className="container pt-5 px-5 pb-5">
        <h3 className="mb-2 pb-2 font-weight-bold text-white">Contact</h3>
        <p className="text-white-50">
          Feel free to contact me through the form below if you have any
          enquires or would just like to have a casual chat, thank you.
        </p>
        <form onSubmit={sendEmail}>
          <Form.Group className="my-2" controlId="name">
            <Form.Label className="text-white-50">Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={state.name}
              placeholder="Name"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="my-2" controlId="email">
            <Form.Label className="text-white-50">Email</Form.Label>
            <Form.Control
              required
              type="text"
              name="email"
              value={state.email}
              placeholder="Email"
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="my-2" controlId="message">
            <Form.Label className="text-white-50">Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="message"
              value={state.message}
              rows="3"
              placeholder="Message"
              onChange={onChange}
            />
          </Form.Group>
          {loading ? (
            <Button className="mt-1" variant="info" type="submit" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </Button>
          ) : (
            <Button className="mt-1" variant="info" type="submit">
              Submit{" "}
              {result && (
                <i
                  className={`${
                    result.success ? "fas fa-check" : "fas fa-times"
                  } text-center`}
                ></i>
              )}
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

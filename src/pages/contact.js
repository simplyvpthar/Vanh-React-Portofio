import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="contactApp">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3>Contact</h3>
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Please enter your first and last name</span>
                </div>
                <input
                  type="text"
                  aria-label="First name"
                  className="form-control"
                />
                <input
                  type="text"
                  aria-label="Last name"
                  className="form-control"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Your email address
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Write your message to me
                  </span>
                </div>
                <textarea name="input" id="input" cols="30" rows="5"></textarea>
              </div>
              <input className="btn btn-primary" type="submit" value="Submit" />
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

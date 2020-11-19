import React from "react";
import linkedInIcon from "../../images/linkedin.png";
import githubIcon from "../../images/githubIcon.png";
import emailIcon from "../../images/email.png";
function Contact() {
  return (
    <section className="bg-white homeBack h-100 TBBuffer">
      <div className="container noMarg col-12 h-100">
        <div className="row h-100">
          <div className="col-sm-12 bg-white cardCenter">
            <div className="card-body h-100">
              <h4 className="portTitle lowBorder contactCardHead font-weight-bold">
                Contact
              </h4>

              {/* <form>
                <div className="form-group">
                  <label for="userName" class="text-black-50">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    placeholder="John Smith"
                  />
                </div>
                <div class="form-group">
                  <label for="userEmail" class="text-black-50">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="userEmail"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="form-group">
                  <label for="userText" class="text-black-50">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="userText"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </form> */}
              <div className="row h-50">
                <h3 className="text-center w-100 va mb-0">
                  Have questions or want to get in touch? <br />
                  Please contact me through any of the below links:
                </h3>
              </div>
              <div className="row mb-3 h-50">
                <div
                  className="d-flex justify-content-center col-sm-12 va"
                  //  col-md-6 iconPosition
                >
                  <a href="https://github.com/TrentSchneider" target="#">
                    <img src={githubIcon} alt="Github" className="contIcon" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/trentonschneider/"
                    target="#"
                  >
                    <img
                      src={linkedInIcon}
                      alt="linkedIn"
                      className="contIcon"
                    />
                  </a>
                  <a href="mailto:trentonschneider@gmail.com">
                    <img src={emailIcon} alt="Email" className="contIcon" />
                  </a>
                </div>
                {/* <h4
                  id="phone"
                  className="float-center font-weight-bold col-sm-12 col-md-6"
                >
                  Phone: 404-218-9178
                </h4> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;

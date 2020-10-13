import React from "react";

function Contact() {
  return (
    <section class="bg-white homeBack h-100 TBBuffer">
      <div class="container noMarg col-12 h-100">
        <div class="row h-100">
          <div class="col-sm-12 bg-white cardCenter">
            <div class="card-body">
              <h4 class="portTitle lowBorder contactCardHead font-weight-bold">
                Contact
              </h4>

              <form>
                <div class="form-group">
                  <label for="userName" class="text-black-50">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
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
                    class="form-control"
                    id="userEmail"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="form-group">
                  <label for="userText" class="text-black-50">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="userText"
                    rows="5"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-dark">
                  Submit
                </button>
              </form>
              <div class="row mb-3">
                <div class="d-flex iconPosition col-sm-12 col-md-6">
                  <a href="https://github.com/TrentSchneider">
                    <img
                      src="Assets/CSS/Images/githubIcon.png"
                      alt="Github"
                      class="contIcon"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/trentonschneider/">
                    <img
                      src="Assets/CSS/Images/linkedin.png"
                      alt="linkedIn"
                      class="contIcon"
                    />
                  </a>
                  <a href="mailto:trentonschneider@gmail.com">
                    <img
                      src="Assets/CSS/Images/email.png"
                      alt="Email"
                      class="contIcon"
                    />
                  </a>
                </div>
                <h4
                  id="phone"
                  class="float-center font-weight-bold col-sm-12 col-md-6"
                >
                  Phone: 404-218-9178
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;

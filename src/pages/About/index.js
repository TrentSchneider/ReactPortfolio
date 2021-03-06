import React from "react";
import Resume from "../../documents/TrentonSchneiderResume.pdf";

function About() {
  return (
    <section className="bg-white homeBack TBBuffer">
      <section className="col-sm-12 bg-white cardCenter">
        <section className="card-body">
          <h4 className="portTitle lowBorder contactCardHead font-weight-bold mb-3">
            About Me
          </h4>
          <div className="container noMarg">
            <div className="row">
              <div
                id="profPic"
                className="card float-left noBord col-sm-12 col-md-5 col-lg-3"
              ></div>
              <div className="float-left m-3 card p-3 col-sm-12 col-md-6 col-lg-8 cardBack">
                <p>
                  My name is Trent Schneider. In a past life, I worked in game
                  development and IT. Now, I am working towards a career in web
                  development. I am thrilled by the prospect of being able to
                  solve each new project I can be a part of as I work out and
                  solve what needs to be done to fulfill the vision of each
                  page.
                </p>
                <p>
                  See my resume{" "}
                  <a href={Resume} target="_blank" rel="noopener noreferrer">
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default About;

import React from "react";

function About() {
  return (
    <section class="bg-white homeBack TBBuffer">
      <section class="col-sm-12 bg-white cardCenter">
        <section class="card-body">
          <h4 class="portTitle lowBorder contactCardHead font-weight-bold mb-3">
            About Me
          </h4>
          <div class="container noMarg">
            <div class="row">
              <div
                id="profPic"
                class="card float-left noBord col-sm-12 col-md-5 col-lg-3"
              ></div>
              <p class="float-left m-3 card p-3 col-sm-12 col-md-6 col-lg-8 cardBack">
                My name is Trent Schneider.
                <br />
                In a past life, I worked in game development and IT. Now, I am
                working towards a career in web development. <br />
                I am thrilled by the prospect of being able to solve each new
                project I can be a part of as I work out and solve what needs to
                be done to fulfill the vision of each page. <br />
                <br />
                See my resume here for more:
                <a href="Assets/Files/Trenton Schneider Resume.pdf" download>
                  download
                </a>
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default About;

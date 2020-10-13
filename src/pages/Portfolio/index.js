import React from "react";
import PortCard from "../../components/PortCard"
import projects from "../../data/portData.json"

function Portfolio() {
  return (
    <section class="bg-white homeBack h-100 TBBuffer">
      <section class="col-sm-12 bg-white cardCenter">
        <section class="card-body">
          <h4 class="portTitle lowBorder contactCardHead font-weight-bold">
            Portfolio
          </h4>
          <div class="container">
              {/* first row */}
            <div class="row d-flex justify-content-around">
              <PortCard projects={projects}/>
            </div>
            <br />
          </div>
        </section>
      </section>
    </section>
  );
}

export default Portfolio;

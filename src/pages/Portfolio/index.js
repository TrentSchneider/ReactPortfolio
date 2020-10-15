import React from "react";
import PortCard from "../../components/PortCard";
import projects from "../../data/portData";

function Portfolio() {
  return (
    <section className="bg-white homeBack h-100 TBBuffer">
      <section className="col-sm-12 bg-white cardCenter">
        <section className="card-body">
          <h4 className="portTitle lowBorder contactCardHead font-weight-bold">
            Portfolio
          </h4>
          <div className="container">
            <PortCard projects={projects} />
          </div>
          <br />
        </section>
      </section>
    </section>
  );
}

export default Portfolio;

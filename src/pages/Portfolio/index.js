import React from "react";

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
            <div class="row d-flex justify-content-around"></div>
            <br />
            {/* second row */}
            <div class="row d-flex justify-content-around"></div>
            <br />
          </div>
        </section>
      </section>
    </section>
  );
}

export default Portfolio;

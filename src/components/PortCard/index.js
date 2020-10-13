import React from "react";

function PortCard(props) {
  return (
    <div>
      {props.projects.map(data => (
        <div class="card card-title projSquare column col-sm-12 col-md-3 cardBack">
          <a href={data.link}>
            <img
              class="float-left img-fluid topBuff"
              src={data.image}
              alt={data.title}
            />
          </a>
          <div class="card-body noPad py-3">
            <div class="float-left">
              <p>{data.description}</p>
              <a href={data.github}>GitHub Repo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortCard;

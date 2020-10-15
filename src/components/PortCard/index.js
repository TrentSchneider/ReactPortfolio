import React from "react";

function PortCard(props) {
  return (
    <div className="row d-flex justify-content-around">
      {props.projects.map((data, i) => (
        <div className="card card-title projSquare column col-sm-12 col-md-3 cardBack" key={i}>
          <a href={data.link} rel="noopener noreferrer" target="_blank">
            <img
              className="float-left img-fluid topBuff"
              src={data.image}
              alt={data.title}
            />
          </a>
          <div className="card-body noPad py-3">
            <div className="float-left">
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

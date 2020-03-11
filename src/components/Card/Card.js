import React from "react";

function Card() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://media.gettyimages.com/photos/goalkeeper-oliver-kahn-of-germany-celebrates-oliver-neuvilles-winning-picture-id762400?s=2048x2048"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <h5 className="card-title">Oliver Khan</h5>
        <hr />
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <hr />
        <button className="btn btn-danger m-2">Delete</button>
        <button className="btn btn-success m-2">Edit</button>
      </div>
    </div>
  );
}

export default Card;

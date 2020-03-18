import React from "react";

function Card(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={"http://localhost:5000/avatars/" + props.avatar}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <hr />
        <h5 className="card-title">{props.email}</h5>
        <hr />
        <h5 className="card-title">{props.phone}</h5>
        <hr />

        <p className="card-text">{props.notes}</p>
        <hr />
        <button className="btn btn-danger m-2">Delete</button>
        <button className="btn btn-success m-2">Edit</button>
      </div>
    </div>
  );
}

export default Card;

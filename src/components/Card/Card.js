import React from "react";
import axios from "axios";
import "./card.styles.scss"
function Card(props) {
  console.log("props", props);

  return (
    <div className="card m-2" >
      <img
      
        src={"http://localhost:5000/avatars/" + props.avatar}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.name}</h5>
        <hr />
        <h5 className="card-email">
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </h5>
        <hr />
        <h5 className="card-phone">
          <a href={`tel:${props.phone}`}>{props.phone}</a>
        </h5>
        <hr />

        <textarea
          readOnly
          className="card-text border-0 w-100"
        >
          {props.notes?props.notes:"No additional information about user"}
        </textarea>
        <hr />
        <button className="btn btn-danger m-2" onClick={props.click}>
          Delete
        </button>
        <button className="btn btn-success m-2">Edit</button>
      </div>
    </div>
  );
}

export default Card;

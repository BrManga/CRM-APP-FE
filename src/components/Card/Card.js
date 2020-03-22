import React, { useState } from "react";
import axios from "axios";
import "./card.styles.scss";
import { useEffect } from "react";
function Card(props) {
  //console.log("props", props.name, props.id);

  const [data, setData] = useState({});
  const [saveButton, setSaveButton] = useState(false);

  const handleChange = e => {
    setSaveButton(true);
    const { name, value } = e.target;
    setData(prevState => ({ ...prevState, [name]: value }));
  };
  const submitHandler = e => {
    e.preventDefault();
    props.saveHandler(props.id, data);
    setSaveButton(false);
  };
  const carddeleteHandler = () => {
    props.deleteHandler(props.id);
    setData({});
  };
  return (
    <div className="card m-2">
      <img
        src={"http://localhost:5000/avatars/" + props.avatar}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <input
          className="card-title"
          value={data.name || props.name}
          onChange={e => handleChange(e)}
          name="name"
        />
        <hr />
        <h5 className="card-email">
          <input
            value={data.email || props.email}
            onChange={e => handleChange(e)}
            name="email"
          />
        </h5>
        <hr />
        <h5 className="card-phone">
          <input
            value={data.phone || props.phone}
            onChange={e => handleChange(e)}
            name="phone"
          />
        </h5>
        <hr />

        <textarea
          className="card-text border-0 w-100"
          onChange={e => handleChange(e)}
          name="notes"
          value={
            data.notes || props.notes
              ? data.notes || props.notes
              : "No additional information about user"
          }
        ></textarea>
        <hr />
        <button className="btn btn-danger m-2" onClick={carddeleteHandler}>
          Delete
        </button>
        {saveButton ? (
          <button className="btn btn-success m-2" onClick={submitHandler}>
            Save
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Card;

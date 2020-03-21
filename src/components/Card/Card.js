import React, { useState } from "react";
import axios from "axios";
import "./card.styles.scss";
function Card(props) {
  console.log("props", props);
  const [saveButton, setSaveButton] = useState(false);
  const [data, setData] = useState({
    name: props.name,
    notes: props.notes,
    email: props.email,
    phone: props.phone,
    avatar: props.avatar
  });
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
          value={data.name}
          onChange={e => handleChange(e)}
          name="name"
        />
        <hr />
        <h5 className="card-email">
          <input
            value={data.email}
            onChange={e => handleChange(e)}
            name="email"
          />
        </h5>
        <hr />
        <h5 className="card-phone">
          <input
            value={data.phone}
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
            data.notes ? data.notes : "No additional information about user"
          }
        ></textarea>
        <hr />
        <button className="btn btn-danger m-2" onClick={props.deleteHandler}>
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

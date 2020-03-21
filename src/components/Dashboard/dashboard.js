import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Card from "../Card/Card";
import "./dashboard.style.scss";
import axios from "axios";
import FormData from "form-data";
import { useEffect } from "react";
function Dashboard(props) {
  console.log("props", props);

  const [login, setLogin] = useState(true);
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard", {
        headers: { "x-auth-token": localStorage.getItem("token") }
      })
      .then(function(response) {
        console.log(response);
        if (response.data.status == "success") {
          console.log("axios data part", response.data.status);

          setState(response.data.message);
        } else {
          localStorage.removeItem("token");
          props.history.push("/signin");
        }
      })
      .catch(function(error) {
        console.log(error);
        props.history.push("/signin");
      });
  }, []);
  const deleteHandler = id => {
    axios
      .post(
        "http://localhost:5000/api/dashboard/deletePerson",
        {
          id: id
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("token")
          }
        }
      )
      .then(response => {
        console.log("response data", response.data.message);

        setState(response.data.message);
      });
  };
  const logout = () => {
    localStorage.setItem("token", "");
    setLogin(false);
  };
  const submitHandler = e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", e.target.file.files[0]);
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("phone", e.target.phone.value);
    formData.append("notes", e.target.notes.value);

    axios
      .post(
        "http://localhost:5000/api/dashboard/newPerson",
        /* {
        
        name:e.target.name.value, 
        email:e.target.email.value,
        phone:e.target.phone.value,
        notes:e.target.notes.value
    } */
        formData,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
            "content-type": "multipart/form-data"
          }
        }
      )
      .then(function(response) {
        if (response.data.status == "success") {
          console.log(response.data.message);

          setState(response.data.message);
        } else {
          localStorage.removeItem("token");
          props.history.push("/signin");
        }
      })
      .catch(function(error) {
        console.log(error);
        props.history.push("/signin");
      });
  };
  const cards = state.map(data => {
    return (
      <Card
        name={data.name}
        notes={data.notes}
        email={data.email}
        phone={data.phone}
        key={data.referenceId}
        avatar={data.avatar}
        id={data._id}
        click={() => deleteHandler(data._id)}
      />
    );
  });
  if (!login) {
    return <Redirect to="/signin" />;
  } else {
    return (
      <div className="all">
        <h1 className="title">WELCOME</h1>
        <button
          className="btn logoutButton logout-button mr-auto"
          onClick={logout}
        >
          Logout
        </button>

        <div className="row">
          <div className="infoEntrance col-sm-12 col-lg-4 ">
            <p className="user-info">USER INFORMATION</p>
            <form
              className="user-form"
              onSubmit={submitHandler}
              encType="multipart/form-data"
            >
              <div className="form-group">
                <p>Upload Photo</p>
                <input
                  type="file"
                  className="form-control-file"
                  name="file"
                  placeholder="load"
                />
              </div>
              <div className="form-group">
                <p>Name</p>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group">
                <p>Phone</p>
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <p>Notes</p>
                <textarea
                  rows="3"
                  className="form-control"
                  name="notes"
                  id="notes"
                  placeholder="Notes"
                ></textarea>
              </div>
              <button className="btn btn-block saveButton">SAVE</button>
            </form>
          </div>

          <div className="col-sm-12 col-lg-8">
            <div className="cardContainer row vh-100">{cards}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

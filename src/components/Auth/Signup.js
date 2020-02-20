import React, { useState } from "react";
import "./css/style.css";
import signupimage from "./images/signup-image.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailtaken, setemailtaken] = useState(false);
  const [signupsucess, setSignupsucess] = useState(false)
  const submitHandler = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/register", {
        email,
        pass,
        name
      })
      .then(res => {
        console.log(res);
        if (res.data.status === "success") {
          console.log("hereeeee");
          setSignupsucess(true)


        } else {
          setemailtaken(true);
        }
      });
  };
  if(signupsucess){return <Redirect to="/signin" />}else{
  return (
    <div className="main">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form
                method="POST"
                className="register-form"
                id="register-form"
                onSubmit={submitHandler}
              >
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={e => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                {emailtaken ? <small>Email is already taken</small> : null}
                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                    value={pass}
                    onChange={e => {
                      setPass(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    className="agree-term"
                  />
                  <label htmlFor="agree-term" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a href="/" className="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src={signupimage} alt="sing up" />
              </figure>
              <Link to="signin" className="signup-image-link">
                I am already member
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )};
};

export default Signup;

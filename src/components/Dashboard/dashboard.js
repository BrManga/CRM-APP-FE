import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
function Dashboard() {
  const [login, setLogin] = useState(true);
  const logout = () => {
    localStorage.setItem("token", "");
    setLogin(false);
  };
  if (!login) {
    return <Redirect to="/signin" />;
  } else {
    return (
      <div>
        <>
          <h1>WELCOME</h1>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
            <br></br>
          <div>
            <Link to="dashboard/companysecrets">Company Secrets</Link>
          </div>
        </>
      </div>
    );
  }
}

export default Dashboard;

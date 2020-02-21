import React from "react";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <>
        <h1>WELCOME</h1>{" "}
        <Link to="dashboard/companysecrets">Company Secrets</Link>
      </>
    </div>
  );
}

export default Dashboard;

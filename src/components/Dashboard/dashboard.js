import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Dashboard(props) {
  

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

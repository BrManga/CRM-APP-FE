import React, { useEffect, useState } from "react";
import axios from "axios";
function Dashboard() {
  const [state, setstate] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard", {
        headers: { "x-auth-token": localStorage.getItem("token") }
      })
      .then(response => {
        if (response.data.status === "success") {
          setstate(true);
        }
      });
  }, []);
  return <div>{state?<h1>WELCOME</h1>:null}</div>;
}

export default Dashboard;

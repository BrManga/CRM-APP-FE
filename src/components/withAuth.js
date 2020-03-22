import React, {useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
export default function withAuth(ComponentToProtect, path) {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
      axios
        .get(`http://localhost:5000/${path}`, {
          headers: { "x-auth-token": localStorage.getItem("token") }
        })
        .then(res => {
          //console.log(res);

          if (res.status === 200) {
            //console.log(res.data);

            setLoading(false);
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          setLoading(false);
          setRedirect(true);
        });
    }, []);

    if (loading) {
      return null;
    }
    if (redirect) {
      return <Redirect to="/signin" />;
    }
    return <ComponentToProtect {...props} />;
  };
}

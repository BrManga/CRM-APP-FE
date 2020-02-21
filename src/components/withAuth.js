import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
export default function withAuth(ComponentToProtect, path) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };
    }
    componentDidMount() {
      axios
        .get(`http://localhost:5000/${path}`, {
          headers: { "x-auth-token": localStorage.getItem("token") }
        })
        .then(res => {
          console.log(res);

          if (res.status === 200) {
            console.log(res.data);

            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          this.setState({ loading: false, redirect: true });
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/signin" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  };
}

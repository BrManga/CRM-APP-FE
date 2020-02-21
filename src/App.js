import React from "react";
import "./App.css";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Companysecrets from "./components/Dashboard/Companysecrets";
import withAuth from "./components/withAuth";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={withAuth(Dashboard, "api/dashboard")}
        />
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route
          exact
          path="/dashboard/companysecrets"
          component={withAuth(Companysecrets, "api/dashboard")}
        />
      </Switch>
    </div>
  );
};

export default App;

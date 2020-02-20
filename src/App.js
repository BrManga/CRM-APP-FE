import React, { useState } from "react";
import "./App.css";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Signin />
        </Route>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Switch>
    </div>
  );
};

export default App;

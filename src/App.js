import React from "react";
import "./App.css";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

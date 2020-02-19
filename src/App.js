import React, { useState } from "react";
import "./App.css";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";

const App = () => {
  const [loginstatus, setLoginstatus] = useState(false);

  return (
    <div className="App">
      <Switch>
        {!loginstatus ? (
          <>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Signin setLoginstatus={setLoginstatus} />
            </Route>
          </>
        ) : (
          <Dashboard path="/dashboard" />
        )}
      </Switch>
    </div>
  );
};

export default App;

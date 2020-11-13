import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "../components/Home.js";
import Login from "../components/Login.js";

const Navigator = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} hideNavBar initial />
        <Scene key="login" type="reset" hideNavBar component={Login} />
      </Scene>
    </Router>
  );
};

export default Navigator;

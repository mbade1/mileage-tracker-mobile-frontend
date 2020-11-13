import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "../components/Home.js";
import Login from "../components/Login.js";
import SignUp from "../components/SignUp.js";
import UserHomeScreen from "../containers/UserHomeScreen.js";

const Navigator = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} hideNavBar initial />
        <Scene key="login" type="reset" hideNavBar component={Login} />
        <Scene key="signup" type="reset" hideNavBar component={SignUp} />
        <Scene key="userHomeScreen" component={UserHomeScreen} />
      </Scene>
    </Router>
  );
};

export default Navigator;

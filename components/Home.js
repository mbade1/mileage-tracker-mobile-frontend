import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Button,
  Alert,
} from "react-native";

import { Actions } from "react-native-router-flux";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  _login() {
    Actions.login();
  }

  _signUp() {
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/home-background.jpg")}
          style={styles.backgroundImage}
        >
          <Text style={styles.logo}>Running Mileage Tracker App</Text>
          <View style={styles.loginButton}>
            <Button title="Log In" color="#8a887c" onPress={this._login} />
          </View>
          <View style={styles.signUpButton}>
            <Button title="Sign Up" color="#8a887c" onPress={this._signUp} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    bottom: 70,
    top: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  loginButton: {
    color: "#8a887c",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(237, 222, 166, 0.8)",
    bottom: 200,
  },
  logo: {
    color: "#8a887c",
    fontSize: 40,
    bottom: 600,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(237, 222, 166, 0.8)",
  },
  signUpButton: {
    color: "#8a887c",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(237, 222, 166, 0.8)",
    bottom: 140,
  },
});

export default Home;

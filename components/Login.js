import React from "react";
import { Actions } from "react-native-router-flux";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Button,
  Alert,
  TextInput,
} from "react-native";

import t from "tcomb-form-native";

import { logInFetch } from "../actions/actions";

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
});

export default class LogIn extends React.Component {
  //   onLoginClick() {
  //     Actions.feedscreen();
  //   }

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    logInFetch(value.username, value.password);
    Actions.userHomeScreen();
  };

  _login() {
    alert("Login!");
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../assets/home-background.jpg")}
        >
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.loginButton}>
            <Form
              ref={(c) => (this._form = c)}
              style={styles.username}
              type={User}
            />
            <Button title="Log In" onPress={this.handleSubmit} />
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
    fontSize: 60,
    bottom: 150,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(237, 222, 166, 0.8)",
  },

  loginText: {
    color: "#8a887c",
    fontSize: 40,
    bottom: 500,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgb(237, 222, 166)",
  },
  password: {
    color: "#8a887c",
    fontSize: 25,
    bottom: 200,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(237, 222, 166, 0.8)",
  },
  username: {
    color: "#8a887c",
    fontSize: 25,
    bottom: 250,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(237, 222, 166, 0.8)",
  },
});

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
import { signUpFetch } from "../actions/actions";

import t from "tcomb-form-native";

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
});

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    signUpFetch(value.username, value.password);

    // this.props.history.push("/user/${id}/runs");
  };

  _signup() {
    alert("Sign Up!");
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../assets/home-background.jpg")}
        >
          <View style={styles.loginText}>
            <Text>Test</Text>
          </View>
          <View style={styles.loginButton}>
            <Form
              ref={(c) => (this._form = c)}
              style={styles.username}
              type={User}
            />
            <Button title="Sign Up" onPress={this.handleSubmit} />
          </View>
          <View style={styles.loginButton}></View>
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
    bottom: 50,
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
    bottom: 100,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(237, 222, 166, 0.8)",
  },

  loginText: {
    color: "#8a887c",
    fontSize: 60,
    bottom: 650,
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

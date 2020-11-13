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

export default class LogIn extends React.Component {
  onLoginClick() {
    Actions.feedscreen();
  }

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
          <TextInput style={styles.username} placeholder="Username"></TextInput>
          <TextInput style={styles.password} placeholder="Password"></TextInput>
          <View style={styles.loginButton}>
            <Button title="Sign Up" color="#8a887c" onPress={this._login} />
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
    fontSize: 60,
    bottom: 650,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(237, 222, 166, 0.8)",
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

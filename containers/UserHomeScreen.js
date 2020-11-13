import React from "react";
import { Text, StyleSheet, View, ImageBackground, Form } from "react-native";
import { fetchUserRuns } from "../actions/actions";
export default class UserHomeScreen extends React.Component {
  componentDidMount() {
    //fetch User runs
    debugger;
    fetchUserRuns();
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require("../assets/home-background.jpg")}
        >
          <Text style={styles.loginText}>Login</Text>
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

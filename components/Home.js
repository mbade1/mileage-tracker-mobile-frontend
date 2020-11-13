import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/home-background.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.logo}>Running Mileage Tracker App</Text>
        <Text style={styles.loginButton}>Log In</Text>
        <Text style={styles.signUpButton}>Sign Up</Text>
      </ImageBackground>
    </View>
  );
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
    fontSize: 30,
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

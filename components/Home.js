import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Home(props) {
  return <Text styles={styles.home}>Home Test</Text>;
}

const styles = StyleSheet.create({
  home: {
    alignItems: "center",
  },
});

export default Home;

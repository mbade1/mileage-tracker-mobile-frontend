import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";

import Navigator from "./components/Navigator";

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// export default function App() {
//   const Stack = createStackNavigator();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <View style={styles.container}>
//           <Stack.Screen name="Home" component={Home} />;
//         </View>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/Reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Navigator from "./components/Navigator";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
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

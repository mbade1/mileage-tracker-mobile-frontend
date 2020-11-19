const BASE_URL = "http://127.0.0.1:3000";

import storage from "../components/Storage";
export function signUpFetch(username, password) {
  fetch(BASE_URL + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((newUser) => console.log(newUser.id))
    .catch((error) => alert(error));
}

export function logInFetch(username, password) {
  return (dispatch) => {
    fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((newUser) => storage.setItem({ user: newUser }))
      .catch((error) => alert(error));
  };
}

export function fetchUserRuns(userId) {
  fetch(BASE_URL + "/users/" + userId + "/runs")
    .then((resp) => resp.json())
    .then((runs) => console.log(runs));
}

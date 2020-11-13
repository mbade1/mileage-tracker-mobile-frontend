const BASE_URL = "http://127.0.0.1:3000/";

export function signUpFetch(username, password) {
  fetch(BASE_URL + "users", {
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
    .then((newUser) => console.log(newUser));
}

export function logInFetch(username, password) {
  fetch(BASE_URL + "login", {
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
    .then((newUser) => console.log(newUser));
}

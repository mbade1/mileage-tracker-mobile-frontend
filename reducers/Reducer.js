const initialState = {
  trails: [],
  username: "",
  userId: "",
  journals: [],
};

debugger;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log(action);
      return {
        ...state,
        username: action.payload.username,
        userId: action.payload.username.id,
      };
  }
};

export default rootReducer;

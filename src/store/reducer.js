const initialState = {
  fName: "",
  lName: "",
  email: "",
  pwd: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "submit") {
    return {
      ...state,
      fName: action.value.fName,
      lName: action.value.lName,
      email: action.value.email,
      pwd: action.value.pwd
    };
  }
  return state;
};

export default reducer;

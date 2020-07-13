const count = (state = 0, action) => {
  switch (action.type) {
    case "ADD_COUNT":
      return ++state;
    case "MINUS_COUNT":
      return --state;
    default:
      return state;
  }
};

export default count;

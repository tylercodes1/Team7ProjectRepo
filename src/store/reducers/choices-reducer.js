const choicesReducer = (state = { selectedChoices: [] }, action) => {
  switch (action.type) {
    case "UPDATE_CHOICES":
      return {
        selectedChoices: action.selectedChoices,
      };
  }
  return state;
};
export default choicesReducer;

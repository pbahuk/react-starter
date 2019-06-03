export default function theme(state = "darkblue", action) {
  console.log(state, action);
  switch (action.type) {
    case "CHANGE_THEME":
      return action.payload;
    default:
      return state;
  }
}

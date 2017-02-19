export default (state={}, action) => {
  switch (action.type) {
    case "ADOPTER_SHOW":
      return action.payload.data
    default:
      return state
  }
}

export default (state={}, action) => {
  debugger
  switch (action.type) {
    case "PET_SHOW":
      return action.payload.data
    default:
      return state
  }
}

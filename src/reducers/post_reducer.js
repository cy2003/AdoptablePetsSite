export default (state=[], action) => {

  switch (action.type) {
    case "POST_SHOW":
      return action.payload.data
    default:
      return state
  }
}

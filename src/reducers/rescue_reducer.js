export default (state={}, action) => {
  switch (action.type) {
    case "RESCUE_SIGN_UP":
      return action.payload.data
      //action.payload.date is the jwt object which contains the secret key
    case "RESCUE_SHOW":
      return action.payload.data
    default:
      return state
  }
}

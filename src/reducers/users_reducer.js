export default (state={}, action) => {

  switch (action.type) {
    case "SIGN_UP":
      return action.payload.data
      //action.payload.date is the jwt object which contains the secret key
    case "SIGN_IN":
      return action.payload.data
    case "SIGN_OUT":
      return state
    case "FETCH_USER":
      return action.payload.data
    default:
      return state
  }
}

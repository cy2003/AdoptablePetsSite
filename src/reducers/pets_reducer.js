export default (state=[], action) => {
  
  switch (action.type) {
    case "PETS_SHOW":
      return action.payload.data
    default:
      return state
  }
}
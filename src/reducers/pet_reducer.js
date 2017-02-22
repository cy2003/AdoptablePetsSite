export default (state={}, action) => {
  switch (action.type) {
    //showOnePet action 
    case "SHOW_ONE_PET":
      return action.payload.data
    default:
      return state
  }
}

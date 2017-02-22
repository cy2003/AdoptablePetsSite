export default (state=[], action) => {

  switch (action.type) {
    //showPets action
    case "PETS_SHOW":
      return action.payload.data
    default:
      return state
  }
}

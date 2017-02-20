export default (state=[], action) => {

  switch (action.type) {
    case "PETS_SHOW":
      return action.payload.data
    case "SHOW_ONE_PET":
      return action.payload.data
    default:
      return state
  }
}

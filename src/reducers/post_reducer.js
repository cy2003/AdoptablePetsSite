export default (state=[], action) => {

  switch (action.type) {
    case "POST_SHOW":
      return [...state, action.payload.data.post]
    case "FETCH_POSTS":
      return action.payload.data
    default:
      return state
  }
}

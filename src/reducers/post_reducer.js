export default (state=[], action) => {

  switch (action.type) {
    case "POST_SHOW":
      return [...state, action.payload.data.post]
      //this returns an array of all the posts
    case "FETCH_POSTS":
      return action.payload.data
    default:
      return state
  }
}

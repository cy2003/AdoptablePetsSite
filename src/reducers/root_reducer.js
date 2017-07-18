import {combineReducers} from 'redux'
import usersReducer from './users_reducer'
import rescueReducer from './rescue_reducer'
import petsReducer from './pets_reducer'
import petReducer from './pet_reducer'
import postReducer from './post_reducer'

export default combineReducers({
  users: usersReducer,
  rescue: rescueReducer,
  pets: petsReducer,
  pet: petReducer,
  post: postReducer
})

/*
{
  pets: [
    {}
  ],
  auth: {
    isAuthenticated: Bool,
    isAuthenticating: Bool,
    currentUser: {
      id: Int,
      username: string,
      email: string,
      don't include /jwt token - or password
    }
  },

}
*/

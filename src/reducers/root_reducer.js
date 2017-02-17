import {combineReducers} from 'redux'
import usersReducer from './users_reducer'
import rescueReducer from './rescue_reducer'

export default combineReducers({
  users: usersReducer,
  rescue: rescueReducer
})

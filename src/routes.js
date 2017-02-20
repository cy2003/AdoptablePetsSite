import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import UserSignUp from './components/user_sign_up'
import UserSignIn from './components/user_sign_in'
import RescueSignUp from './components/rescue_sign_up'
import Auth from './auth/authenticator'
import RescueShow from './components/rescue_show'
import PetsShow from './components/pets_show'
import OnePetShow from './components/one_pet_show'


export default(
  <Route path="/" component={App}>
    <Route path="signup" component={UserSignUp}/>
    <Route path="signin" component={UserSignIn}/>
    <Route path="rescue_sign_up" component={RescueSignUp}/>
    <Route path="rescues/:id" component={RescueShow}/>
    <Route path="pets" component={PetsShow}/>
    <Route path="pets/:id" component={OnePetShow}/>
  </Route>
)


function requireAuth(nextState, replace) {
  if (!Auth.loggedIn()) {
    replace({
      pathname: '/signup',
      state: { nextPathname: nextState.location.pathname }
  })
}
}

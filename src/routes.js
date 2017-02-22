import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import UserSignUp from './components/user_sign_up'
import UserSignIn from './components/user_sign_in'
import RescueSignUp from './components/rescue_sign_up'
import Auth from './auth/authenticator'
import RescueShow from './components/rescue_show'
import PetsIndex from './components/pets_index'
import OnePetShow from './components/one_pet_show'
import Pictures from './components/pictures_show'
import DogsIndex from './components/dogs_index'
import CatsIndex from './components/cats_index'
import PostCreate from './components/post_create'

//

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Pictures}/>
    <Route path="signup" component={UserSignUp}/>
    <Route path="signin" component={UserSignIn}/>
    <Route path="rescue_sign_up" component={RescueSignUp}/>
    <Route path="rescues/:id" component={RescueShow}/>
    <Route path="pets" component={PetsIndex}/>
    <Route path="pets/:id" component={OnePetShow}/>
    <Route path="dogs" component={DogsIndex}/>
    <Route path="cats" component={CatsIndex}/>
    <Route path="pets/:id/posts/new" component={PostCreate}/>
    <Route path="pets/:id/posts/show" component={OnePetShow}/>
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

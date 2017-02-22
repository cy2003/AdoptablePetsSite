import axios from 'axios'
import {browserHistory} from 'react-router';

axios.defaults.baseURL = 'http://localhost:3000/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

//user = Object{name: "cathy", email: "cathy", password: "1234", password_confirmation: "1234", checkbox: true}
export const createUser = (user) => {
  // user is an object that contains all the form's information
  let response = axios.post('signup', user).then((innerResponse) => {
    //.then does not run until rails finishes
    //innerResponse is an object that contains the jwt key
    //innerResponse.data.rescue => true or false
    sessionStorage.setItem('jwt', innerResponse.data.jwt)
    axios.defaults.headers.common['AUTHORIZATION'] = innerResponse.data.jwt

    if (innerResponse.data.rescue === true){
      browserHistory.push('/rescue_sign_up')
      return innerResponse
    }
    else {
      browserHistory.push(`/pets`)
      return innerResponse
    }
  })
  return {
    type: "SIGN_UP",
    payload: response
  }
}

export const signinUser = (user) => {
  let response = axios.post('signin', user).then((innerResponse) => {
    sessionStorage.setItem('jwt', innerResponse.data.jwt)
    //innerResponse.data => {user: 1, is_rescue: true, jwt: "shfdlhfl"}
    //find the id and insert it

    var id = innerResponse.data.user
    var rescue_id = innerResponse.data.rescue_id
    var adopter_id = innerResponse.data.adopter_id
    if (innerResponse.data.is_rescue === true){
      browserHistory.push(`/rescues/${rescue_id}`)
      return innerResponse
    }
    else {
      browserHistory.push(`/pets`)
      return innerResponse
    }
  })
  return {
    type: "SIGN_IN",
    payload: response
  }
}

export const createRescue = (rescue) => {
  let response = axios.post('rescue_sign_up', rescue).then((innerResponse) => {
    sessionStorage.setItem('jwt', innerResponse.data.jwt)
    browserHistory.push('/rescue_show')
    return innerResponse
  })
  return {
    type: "RESCUE_SIGN_UP",
    payload: response
  }
}

export const showRescuePets = function(id){
  let response = axios.get(`/rescues/${id}`).then((innerResponse) => {
    return innerResponse
  })
  return {
    type: "RESCUE_SHOW",
    payload: response
  }
}

export const showPets = function(){
  let response = axios.get(`/pets`).then((innerResponse) => {
    return innerResponse
  })
  return {
    type: "PETS_SHOW",
    payload: response
  }
}

export const showOnePet = function(id){

  let response = axios.get(`/pets/${id}`).then((innerResponse) =>{
    browserHistory.push(`/pets/${id}`)
    return innerResponse})
  return {
    type: "SHOW_ONE_PET",
    payload: response
  }
}

export const createPost = function(post){
  //need to pass the post params

  let response = axios.post(`/posts`, post).then((innerResponse) => {
    var id = innerResponse.data.post.pet_id
    browserHistory.push(`/pets/${id}`)
    return innerResponse })
  return {
    type: "POST_SHOW",
    payload: response
  }
}

export const fetchUser = function(){
  let response = axios.get('/current_user').then((innerResponse) => {
    return innerResponse
  })
  return {
    type: "FETCH_USER",
    payload: response
  }
}



// export const createNewPet = function(){
//   let response = axios.get(`/rescues/`)
// }

// create action for rescue sign up
// send the info to rails
// in rails create company's name
// use browserHistory to redirect
// change the state and set up reducer to handle that

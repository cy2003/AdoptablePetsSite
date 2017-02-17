import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

import { browserHistory } from 'react-router'
// import _ from 'lodash'
// what is lodash and do I need it?

export default {
//
//   fetchNotes: function(){
//     return axios.get('/notes').then(response => response.data)
//   },
//
  signinUser: function(loginParams){

    return axios.post('/sessions', loginParams)
      .then((res) => {
        sessionStorage.setItem('jwt', res.data.jwt)
        browserHistory.push('/')
        return { username: res.data.username }
      })

  }
//   updateNote: function(noteParams){
//     return _.debounce(() => {
//       axios.patch(`/notes/${noteParams.id}`, noteParams.note )
//                     .then(response => response.data )
//     }, 500)()
//   } ,
//
//   createNote: function(params){
//     return axios.post(`/notes`, params )
//       .then( response => response.data )
//
//   }
}

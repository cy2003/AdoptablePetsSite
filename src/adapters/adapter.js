import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

import { browserHistory } from 'react-router'


export default {
  signinUser: function(loginParams){
    return axios.post('/sessions', loginParams)
      .then((res) => {
        sessionStorage.setItem('jwt', res.data.jwt)
        browserHistory.push('/')
        return { username: res.data.username }
      })
  }
}

// 4 hours a day
// every other day 1 hour code wars  or 1 hour algorithm (in JS)
// 2 hours a day building something
// 1 hour a day reading blogs and or books and
// 1 blog post a week

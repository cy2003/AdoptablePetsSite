import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {signinUser} from '../actions/index'
import {connect} from 'react-redux'

class UserSignIn extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const user = {email: this.refs.email.value, password: this.refs.userPassword.value}
    this.props.signinUser(user)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <input ref="email" placeholder="Enter Email" />
          <input type="password" ref="userPassword"  placeholder="Enter Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({signinUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignIn)

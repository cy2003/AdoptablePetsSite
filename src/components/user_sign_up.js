import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {createUser} from '../actions/index'
import {connect} from 'react-redux'

class UserSignUp extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const user = {name: this.refs.name.value, email: this.refs.email.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value, rescue: this.refs.rescue.checked}
    this.props.createUser(user)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Name</h4>
          <input ref="name" placeholder="Enter Name" />
          <h4>Email</h4>
          <input ref="email" placeholder="Enter Email" />
          <h4>Please enter password</h4>
          <input type="password" ref="userPassword"  placeholder="Enter Password" />
          <h4>Please confirm password</h4>
          <input type="password" ref="passwordConfirmation"  placeholder="Confirm Password" />
          <h4>Please check the box if you're a rescue organization</h4><input ref="rescue" type="checkbox"/>
          <br></br>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

<div>

      </div>

function mapDispatchToProps(dispatch){
  return bindActionCreators({createUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSignUp)

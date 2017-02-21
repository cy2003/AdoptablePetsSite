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
          <h5>Please Enter Name</h5>
          <input ref="name" placeholder="Enter Name" />
          <h5>Please Enter Email</h5>
          <input ref="email" placeholder="Enter Email" />
          <h5>Please enter password</h5>
          <input type="password" ref="userPassword"  placeholder="Enter Password" />
          <h5>Please confirm password</h5>
          <input type="password" ref="passwordConfirmation"  placeholder="Confirm Password" />
          <h5>Please check the box if you're a rescue organization</h5><input ref="rescue" type="checkbox"/>
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

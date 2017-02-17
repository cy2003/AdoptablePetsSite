import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createRescue} from '../actions/index'


class RescueSignUp extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const rescue = {organization_name: this.refs.organization_name.value, street_address: this.refs.street_address.value, city: this.refs.city.value, state: this.refs.state.value, zipcode: this.refs.zipcode.value, phone: this.refs.phone.value, website: this.refs.website.value,}
    this.props.createRescue(rescue)
    //tell what action to take in action/index.js
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Please Complete</h3>
          <h4>Company's Name</h4>
          <input ref="organization_name" placeholder="Enter Company's Name" />
          <h4>Street Address</h4>
          <input ref="street_address"  placeholder="Enter Street Address" />
          <h4>City</h4>
          <input ref="city"  placeholder="Enter City" />
          <h4>State</h4>
          <input ref="state"  placeholder="Enter State" />
          <h4>Zipcode</h4>
          <input ref="zipcode"  placeholder="Enter Zipcode" />
          <h4>Phone Number</h4>
          <input ref="phone"  placeholder="Enter Phone Number" />
          <h4>Website</h4>
          <input ref="website"  placeholder="Enter Website" />
          <br></br>
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createRescue}, dispatch)
}

export default connect(null, mapDispatchToProps)(RescueSignUp)

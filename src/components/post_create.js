import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createPost} from '../actions/index'


class PostCreate extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const post = {description: this.refs.description.value}
    this.props.createPost(post)
    //tell what action to take in action/index.js
  }

  render(){
    console.log(this.props.pet)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Create New Post</h5>
          <h6>for</h6>

          <input ref="description" placeholder="Enter description" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {pet: state.pet, rescue: state.rescue, post: state.post}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createPost}, dispatch)
}

export default connect(null, mapDispatchToProps)(PostCreate)

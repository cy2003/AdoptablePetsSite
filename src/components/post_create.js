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
    const post = {date: this.refs.date.value, description: this.refs.description.value, pet_id: this.refs.pet_id.value}
    this.props.createPost(post)
    //tell what action to take in action/index.js
  }

  render(){

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Create New Post</h5>
          <h6>for</h6>
          <h5>{this.props.pet.name}</h5>
          <img src={`${this.props.pet.picture_url}`} height={200}/>
          <input type="date" ref="date" placeholder="Enter date" />
          <input ref="description" placeholder="Enter description" />
          <input type="hidden" ref="pet_id" value={this.props.pet.id}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate)

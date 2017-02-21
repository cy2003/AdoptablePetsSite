import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showOnePet} from '../actions/index'
import {Link} from 'react-router'

class OnePetShow extends Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    const id = parseInt(this.props.params.id)
    this.props.showOnePet(id)
  }

  render(){
      console.log(this.props.pet)
      console.log(this.props.rescue)
      if (!this.props.pet || !this.props.pet.rescue ){
        return (<div>Loading...</div>)
      }
      else {
        if (!this.props.rescue.id){
          return(
            <div key={this.props.pet.id}>
              <br></br>
              <br></br>
              <img src={`${this.props.pet.picture_url}`} height={300}/>
              <h3>{this.props.pet.name}</h3>
              <h5>Sex: {this.props.pet.sex}</h5>
              <h5>Breed: {this.props.pet.breed}</h5>
              <h5>Bio:  {this.props.pet.bio}</h5>
              <h5>Rescue Group: {this.props.pet.rescue.organization_name}</h5>
              <h5>Rescue Website: {this.props.pet.rescue.website}</h5>
              <br></br>
              <br></br>
            </div>
          )
        }
        else {
          return(
            <div key={this.props.pet.id}>
              <br></br>
              <br></br>
              <img src={`${this.props.pet.picture_url}`} height={300}/>
              <h3>{this.props.pet.name}</h3>
              <h5>Sex: {this.props.pet.sex}</h5>
              <h5>Breed: {this.props.pet.breed}</h5>
              <h5>Bio:  {this.props.pet.bio}</h5>
              <h5>Rescue Group: {this.props.pet.rescue.organization_name}</h5>
              <h5>Rescue Website: {this.props.pet.rescue.website}</h5>
              <Link to={`/pets/${this.props.pet.id}/posts/new`}><h6>Create New Post</h6></Link>
            </div>
          )
      }
      }
    }
      //this.props.rescue is an object with rescue's attributes (i.e. :id, :organization_name)
}


  function mapStateToProps(state){
    return {pet: state.pet, rescue: state.rescue}
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({showOnePet}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(OnePetShow)

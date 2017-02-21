import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showOnePet} from '../actions/index'

class OnePetShow extends Component {

  componentDidMount(){
    const id = parseInt(this.props.params.id)
    this.props.showOnePet(id)
  }

  render(){

      if (!this.props.pet){
        return (<div>Loading...</div>)
      }
      else {
        return(
          <div>
            <br></br>
            <br></br>
            <img src={`${this.props.pet.picture_url}`} height={300}/>
            <h3>{this.props.pet.name}</h3>
            <h5>Sex: {this.props.pet.sex}</h5>
            <h5>Breed: {this.props.pet.breed}</h5>
            <h5>Bio:  {this.props.pet.bio}</h5>
            <h5>Rescue Group:{this.props.pet.rescue}</h5>
          </div>
        )
      }
  }
}




  function mapStateToProps(state){
    return {pet: state.pet}
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({showOnePet}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(OnePetShow)

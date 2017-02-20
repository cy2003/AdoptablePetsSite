import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showPets} from '../actions/index'

class PetsShow extends Component {
  constructor(){
    super()
  }


  componentDidMount(){
    this.props.showPets()
  }


  render(){


    if (!this.props.pets) {
      return (<div>Loading...</div>)
    }
    else {
      
      return (
        <div>
          <h3>Pets Available For Adoption</h3>
          <div>
            {this.props.pets.map((pet) => {
              return (
                <div>
                  <img src={`${pet.picture_url}`} height={400} width={390} key={pet.id}/>
                  <div>Name: {pet.name}</div>
                  <div>Sex: {pet.sex}</div>
                  <div>Age: {pet.age}</div>
                  <br></br>
                  <br></br>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }
}


// state is the state of the store
  function mapStateToProps(state){
    return {pets: state.pets}
  }
//'pet:' is the name of the prop

  function mapDispatchToProps(dispatch){
    return bindActionCreators({showPets}, dispatch)
  }



//mapStateToProps will be called every time the state changes
export default connect(mapStateToProps, mapDispatchToProps)(PetsShow)

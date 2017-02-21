import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showPets} from '../actions/index'
import {showOnePet} from '../actions/index'

class DogsIndex extends Component {
  constructor(){
    super()
  }

  componentDidMount(){
    this.props.showPets()
  }

  handleClick(id){
    this.props.showOnePet(id)
  }

  render(){

    if (!this.props.pets) {
      return (<div>Loading...</div>)
    }
    else {

      return (
        <div>
          <h4>Dogs Available For Adoption</h4>
          <div>
            {this.props.pets.map((pet) => {
                if (pet.pet_type === "dog") {
                  return (
                    <div key={pet.id} onClick={this.handleClick.bind(this, pet.id)}>
                      <img src={`${pet.picture_url}`} height={300} />
                      <h5>{pet.name}</h5>
                      <div>Sex: {pet.sex}</div>
                      <br></br>
                      <br></br>
                    </div>
                  )
                }
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
    return bindActionCreators({showPets, showOnePet}, dispatch)
  }

//mapStateToProps will be called every time the state changes
export default connect(mapStateToProps, mapDispatchToProps)(DogsIndex)

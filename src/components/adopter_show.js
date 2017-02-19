import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showAdopterPets} from '../actions/index'

class AdopterShow extends Component {
  constructor(){
    super()
  }

  componentDidMount(){
    const id = parseInt(this.props.params.id)
    this.props.showAdopterPets(id)
  }

  render(){
    if (!this.props.adopter.pets) {
      return (<div>Loading...</div>)
    }
    else {
      return (
        <div>
          <h3>Pets Available For Adoption</h3>
          <div>
            {this.props.adopter.pets.map((pet) => {
              return (
                <div>
                  <img src={`${pet.picture_url}`} height={400} width={400} />
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
    return {adopter: state.adopter}
  }
//'pet:' is the name of the prop

  function mapDispatchToProps(dispatch){
    return bindActionCreators({showAdopterPets}, dispatch)
  }



//mapStateToProps will be called every time the state changes
export default connect(mapStateToProps, mapDispatchToProps)(AdopterShow)

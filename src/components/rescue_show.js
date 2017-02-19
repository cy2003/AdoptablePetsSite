import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showRescuePets} from '../actions/index'


class RescueShow extends Component {
  constructor(){
    super()
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    const id = parseInt(this.props.params.id)
    this.props.showRescuePets(id)
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addPet( this.state.pet )
    this.setState({pet: ''})
  }

  handleInputChange(event){
    this.setState({
      pet: event.target.value
    })
  }


  render(){

    if (!this.props.rescue.pets) {
      return (<div>Loading...</div>)
    }
    else {
      return (
        <div>
          <h3>{ this.props.rescue.organization_name }</h3>
          <div>
            <div>
              {this.props.rescue.pets.map((pet) => {
                return (
                <div>
                  <img src={`${pet.picture_url}`} height={400} width={400} />
                  <div>Name: {pet.name}</div>
                  <div>Sex: {pet.sex}</div>
                  <div>Age: {pet.age}</div>
                  <br></br>
                  <br></br>
                </div>
                ) })}
            </div>
          </div>
          <h3>Create New Pet</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type='submit' onChange={this.handleInputChange.bind(this)} value="Create"/>
            </form>

            <br></br>
          <h3>Update New Pet</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type='submit' onChange={this.handleInputChange.bind(this)} value="Update"/>
            </form>
        </div>

      )}
    }
}



  function mapStateToProps(state){
    return {rescue: state.rescue}
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({showRescuePets}, dispatch)
  }



// export default connect(null, mapDispatchToProps)(RescueShow)
export default connect(mapStateToProps, mapDispatchToProps)(RescueShow)

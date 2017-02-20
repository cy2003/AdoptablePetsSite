import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {showOnePet} from '../actions/index'

class OnePetShow extends Component {

  componentDidMount(id){
    this.props.showOnePet(id)
  }

  render(){

      return(
        <div>Hello!</div>)


}
}

  function mapStateToProps(state){
    return {pets:state.pets}
  }

  function mapDispatchToProps(dispatch){
    return bindActionCreators({showOnePet}, dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(OnePetShow)

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pictures extends Component {

  render() {
    return (
      <div className="Pictures">

          <div> {this.props.children}</div>
          <br></br>
          <br></br>
          <img src="images/white-dog.jpg" alt="Dog" height="450"/>
          <img src="images/cat3.jpg" alt="Cat" height="500"/>
      </div>
    )
  }
}

const connectedComponent = connect(mapStateToProps)(Pictures)

function mapStateToProps(state){
  return {items: state.items}
}

export default connectedComponent;

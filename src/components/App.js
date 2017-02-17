import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'



class App extends Component {

  handleSignOut(){
    this.props.dispatch({type: 'SIGN_OUT'})
  }

  render() {
    return (
      <div className="App">

          <h2>Welcome to Adoptable Pets!</h2>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/signup"><li>Sign Up </li></Link>
            <Link to="/signin"><li>Sign In </li></Link>
            <Link to="/"><li onClick={this.handleSignOut.bind(this)}>Sign Out</li></Link>
          </ul>
          <div> {this.props.children}</div>

      </div>
    )
  }
}



// export default App;
const connectedComponent = connect(mapStateToProps)(App)

function mapStateToProps(state){
  return {items: state.items}
}

export default connectedComponent;

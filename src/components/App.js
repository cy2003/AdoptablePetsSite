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
          <ul>
            <h2>Welcome to Adoptable Pets!</h2>
            <h4>Follow your favorite pets</h4>
            <Link to="/"><li>Home</li></Link>
            <Link to="/pets"><li>Dogs</li></Link>
            <Link to="/pets"><li>Cats</li></Link>
            <Link to="/signup"><li>Sign Up </li></Link>
            <Link to="/signin"><li>Sign In </li></Link>
            <Link to="/"><li onClick={this.handleSignOut.bind(this)}>Sign Out</li></Link>
          </ul>
          <div> {this.props.children}</div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

      </div>
    )
  }
}
// <img src="images/cat3.jpg" alt="Cat" height="500"/>
// <img src="images/white-dog.jpg" alt="Dog" height="450"/>



// export default App;
const connectedComponent = connect(mapStateToProps)(App)

function mapStateToProps(state){
  return {items: state.items}
}

export default connectedComponent;

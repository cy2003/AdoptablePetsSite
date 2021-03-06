import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import routes from './routes'
import rootReducer from './reducers/root_reducer'
import {applyMiddleware, createStore} from 'redux'
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {fetchUser} from './actions'
import store from './store';
// import { Button, Card, Row, Col } from 'react-materialize';


//const store = applyMiddleware(ReduxPromise)(ReudThunk)(createStore)(rootReducer)

if (sessionStorage.getItem('jwt')) {
  store.dispatch(fetchUser())
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
)

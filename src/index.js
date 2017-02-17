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


const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}> </Router>
  </Provider>,
  document.getElementById('root')
)

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import ReduxPromise from 'redux-promise';

const middleware = [ReduxPromise]

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)

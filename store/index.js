//! == Import : npm
import { createStore, compose, applyMiddleware  } from 'redux';

//! == Import : local
import rootReducer from '../reducers/index'

//! == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers()

const store = createStore(
    rootReducer,
      //? preloadedState,
     enhancers,
);

export default store;
//! == Import : npm
import { createStore, compose, applyMiddleware  } from 'redux';

//! == Import : local
import rootReducer from '../reducers/index';
import searchMiddlewares from '../middlewares/searchMiddlewares'

//! == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        searchMiddlewares,
    )
)

const store = createStore(
    rootReducer,
      //? preloadedState,
     enhancers,
);

export default store;
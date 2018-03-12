import { createStore, applyMiddleware, compose } from 'redux'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from '../reducers'


const configureStore = (preloadedState, browserHistory) => {
  const routemw = routerMiddleware(browserHistory)
  const store = createStore(
      rootReducer,
      preloadedState,
      compose(
          applyMiddleware(thunk, routemw, apiMiddleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  )


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}

export default configureStore
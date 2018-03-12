
import {routerReducer} from 'react-router-redux'
import { combineReducers } from 'redux'

import feedReducer from './FeedReducer'


const entities = (state = { users: {}, repos: {} }, action) => {
  return {}
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = {}, action) => {
  return {}
}

export default combineReducers({
  feed : feedReducer,
  routing: routerReducer,
});
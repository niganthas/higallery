
import {routerReducer} from 'react-router-redux'
import { combineReducers } from 'redux'

import feedReducer from './FeedReducer'
import AlbumsReducer from './AlbumsReducer'


export default combineReducers({
  feed : feedReducer,
  album : AlbumsReducer,
  routing: routerReducer,
});
import {
  FETCH_FEED,
  FETCH_FEED_FAILURE,
  FETCH_FEED_SUCCESS
} from '../actions/FeedActions';

const initialState = { feedList: { feeds: [], error: null, loading: false } };

export default function (state = initialState, action) {
  let error;

  switch (action.type) {
    case FETCH_FEED :
      return {...state, feedList: {feeds:[], error: null, loading: true}}
    case FETCH_FEED_SUCCESS :
      console.log(action.payload.data)
      return {...state, feedList: { feeds: action.payload.data.items, error: null, loading: false }}
    case FETCH_FEED_FAILURE :
      error = action.payload.data || { message: action.payload.message };
      return {...state, feedList: {feeds:[], error: error, loading: false}}
    default:
      return state
  }

}


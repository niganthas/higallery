import { CALL_API } from 'redux-api-middleware'

let endpoint = process.env.REACT_APP_API_ENDPOINT+'gallery'
let apiKey = process.env.REACT_APP_CLIENT_ID

export const FETCH_FEED = 'FETCH_FEED'
export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS'
export const FETCH_FEED_FAILURE = 'FETCH_FEED_FAILURE'

export const fetchFeed = () => ({
  [CALL_API]: {
    types: [FETCH_FEED, FETCH_FEED_SUCCESS, FETCH_FEED_FAILURE],
    endpoint: endpoint+'/t/awesome',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID ' + apiKey
    }
  }
});
import React, {Fragment} from 'react'
import { render } from 'react-dom'
import { Router} from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import createHistory from 'history/createBrowserHistory'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

import App from "./containers/App/App";



const preloadState = {}

//Redux router sync
const browserHistory = createHistory()
const store = configureStore(preloadState, browserHistory)
syncHistoryWithStore(browserHistory, store)

render(

    <Fragment>
      <Provider store={store}>
        <Router history={browserHistory}>
          <App/>
        </Router>
      </Provider>
    </Fragment>,
    document.getElementById('root')
);


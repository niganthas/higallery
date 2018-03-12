import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { Container } from 'reactstrap';

import Header from "../../components/Header";
import Feed from "../Feed";
import Albums from "../Albums";

class App extends Component {
  render() {
    return (
        <div>
          <Helmet>
            <meta/>
          </Helmet>
          <Header/>
          <Container className='main-container'>
            <Switch>
              <Route exact path='/' component={Feed}/>
              <Route path='/albums' component={Albums}/>
            </Switch>
          </Container>

        </div>
    );
  }
}


export default App;

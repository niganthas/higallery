import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class ImgView extends Component {
  render() {

    return (
        <div>
          <h1>Img view</h1>
          <Link to='/'>go main</Link>
        </div>
    );
  }
}

ImgView.propTypes = {};

export default ImgView;

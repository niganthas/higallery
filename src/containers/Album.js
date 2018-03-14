import React, {Component} from 'react';
import { connect } from 'react-redux'
import {
  Button,
} from 'reactstrap'

class Album extends Component {

  componentWillMount() {

  }


  render() {
    return (
        <div>
          <h1>Albums</h1>
          <div><Button onClick={this.toggleCreateAlbum}>upload</Button></div>
          <h4 className='mt-5'>{this.props.match.params.id}</h4>
          <div className='album-imgs'>

          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.album
  }
}

export default connect(mapStateToProps)(Album);

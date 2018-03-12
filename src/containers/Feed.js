import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { CardColumns } from 'reactstrap'


import { fetchFeed } from '../actions/FeedActions'
import FeedItem from '../components/FeedItem'


class Feed extends Component {


  componentWillMount() {
    this.props.dispatch(fetchFeed())
  }


  render() {
    let { loading, feeds } = this.props.feed.feedList;
    const list = (loading && feeds) ?
        'Loading feed...' :
        feeds.map(feed => <FeedItem key={feed.id} feed={feed}/>)

    return (
        <div>
          <h1>Feed</h1>
          <CardColumns className='feed-list'>
            {list}
          </CardColumns>
          <Link to='/img'>to Img</Link>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    feed: state.feed
  }
}

Feed.propTypes = {};

export default connect(mapStateToProps)(Feed);

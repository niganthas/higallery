import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {createAlbum, getAlbums, deleteAlbum} from '../actions/AlbumsActions'
import {id} from '../utils/utils'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  Input
} from 'reactstrap'
import {fetchFeed} from "../actions/FeedActions";

class Albums extends Component {

  state = {
    showCreateModal: false,
    createAlbumName: null,
  }

  toggleCreateAlbum = () => {
    this.setState({
      showCreateModal: !this.state.showCreateModal
    });
  }

  onChangeInput = (e) => {
    this.setState({
      createAlbumName: e.target.value
    })
  }

  handleSubmit = (e) => {
    const album = {
      id: id(),
      name: this.state.createAlbumName,
      imgs: []
    }
    this.setState({
      showCreateModal: false,
    });
    this.props.dispatch(createAlbum(album))
    e.preventDefault()
  }

  handleDelete = (e,id) => {
    const {albums} = this.props.album
    const deletedAlbum =  albums.items.find(album => album.id === id)
    this.props.dispatch(deleteAlbum(deletedAlbum))
  }


  componentWillMount() {
    this.props.dispatch(getAlbums())
  }


  render() {
    const {items, loading} = this.props.album.albums
    const albumList = items && items.map((album) => {
      return (
          <div className='albums-list__item' key={album.id}>
            <h5>{album.name}</h5>
            <p>Imgs count: {album.imgs.length}</p>
            <Link to={'/album/'+album.id} className="btn btn-primary">View</Link> {''}
            <Button outline color="secondary">Eidt</Button> {''}
            <Button outline color="danger" onClick={(e)=> this.handleDelete(e, album.id)}>Delete</Button>
          </div>
      )
    })

    return (
        <div>
          <h1>Albums</h1>
          <div><Button onClick={this.toggleCreateAlbum}>create</Button></div>
          <div className='albums-list'>
            {albumList}
          </div>
          <Modal isOpen={this.state.showCreateModal} toggle={this.toggleCreateAlbum}>
            <form onSubmit={this.handleSubmit}>
              <ModalHeader toggle={this.toggleCreateAlbum}>Create album</ModalHeader>
              <ModalBody>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">Name</InputGroupAddon>
                  <Input placeholder="Album name" onChange={this.onChangeInput} required />
                </InputGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleCreateAlbum}>Cancel</Button>
                <Button color="primary" type="submit" >Create</Button>{' '}
              </ModalFooter>
            </form>
          </Modal>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    album: state.album
  }
}

export default connect(mapStateToProps)(Albums);

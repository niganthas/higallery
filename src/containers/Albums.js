import React, {Component} from 'react';
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

class Albums extends Component {

  state = {
    showCreateModal: false,
    createAlbumName: null,
    albums: []
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
    const album = {name: this.state.createAlbumName, items: []}
    this.setState({
      showCreateModal: false,
      albums: [...this.state.albums,  album]
    });

    e.preventDefault()
  }

  render() {
    const albums = this.state.albums.map((album, index) => {
      return (
          <div className='albums-list__item' key={index}>
            <h5>{album.name}</h5>
            <p>Imgs count: {album.items.length}</p>
            <Button color="primary">View</Button> {''}
            <Button outline color="secondary">Eidt</Button> {''}
            <Button outline color="danger">Delete</Button>
          </div>
      )
    })

    return (
        <div>
          <h1>Albums</h1>
          <div><Button onClick={this.toggleCreateAlbum}>create</Button></div>
          <div className='albums-list'>
            {albums}
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


export default Albums;

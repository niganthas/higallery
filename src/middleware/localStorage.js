import {
  ALBUM_GET,
  ALBUM_CREATE
} from "../actions/AlbumsActions";

export default (store) => (next) => (action) => {
  if (action.type === ALBUM_GET) {
    const albums = JSON.parse(localStorage.getItem('albums')) || []
    return next({...action, albums})
  }

  if (action.type === ALBUM_CREATE) {
    const albums = JSON.parse(localStorage.getItem('albums')) || []
    albums.push(action.album)
    localStorage.setItem('albums', JSON.stringify(albums))
    return next({...action, albums})
  }

  return next(action)
}
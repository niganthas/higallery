import {
  getAlbums,
  ALBUMS_GET,
  ALBUM_CREATE, ALBUM_DELETE
} from "../actions/AlbumsActions";

export default (store) => (next) => (action) => {
  if (action.type === ALBUMS_GET) {
    const albums = JSON.parse(localStorage.getItem('albums')) || []
    return next({...action, albums})
  }

  if (action.type === ALBUM_CREATE) {
    const albums = JSON.parse(localStorage.getItem('albums')) || []
    albums.push(action.album)
    localStorage.setItem('albums', JSON.stringify(albums))
    return next({...action, albums})
  }

  if (action.type === ALBUM_DELETE) {
    const oldalbums = JSON.parse(localStorage.getItem('albums')) || []
    const albums = oldalbums.filter((album) => {
      return album.id !== action.album.id
    })
    localStorage.setItem('albums', JSON.stringify(albums))
    return next({...action, albums})
  }

  return next(action)
}
import {
  ALBUM_GET,
  ALBUM_CREATE
} from "../actions/AlbumsActions";

export default (store) => (next) => (action) => {
  if (action.type === ALBUM_GET) {
    if (localStorage.getItem('albums') !== action.payload) {
      localStorage.setItem('albums', action.payload);
    }
  }

  if (action.type === ALBUM_CREATE) {
    if (localStorage.getItem('albums') !== action.payload) {
      localStorage.setItem('albums', action.payload);
    }
  }

  return next(action)
}
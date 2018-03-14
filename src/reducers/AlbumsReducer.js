import {
  ALBUMS_GET,
  ALBUM_CREATE,
  ALBUM_EDIT,
  ALBUM_DELETE
} from '../actions/AlbumsActions';

const initialState = { albums: { items: [], error: null, loading: false } };

export default function (state = initialState, action) {
  let error;

  switch (action.type) {
    case ALBUMS_GET :
      return {...state, albums: {items:action.albums, error: null, loading: false}}
    case ALBUM_CREATE :
      return {...state, albums: {items:action.albums, error: null, loading: false}}
    case ALBUM_DELETE :
      return {...state, albums: {items:action.albums, error: null, loading: false}}
    default:
      return state
  }

}


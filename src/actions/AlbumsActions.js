import ls from 'local-storage'

export const ALBUM_GET = 'ALBUM_CREATE'


export const ALBUM_CREATE = 'ALBUM_CREATE'
export const ALBUM_CREATE_SUCCESS = 'ALBUM_CREATE_SUCCESS'
export const ALBUM_CREATE_FAILURE = 'ALBUM_CREATE_FAILURE'

export const ALBUM_EDIT = 'ALBUM_EDIT'
export const ALBUM_EDIT_SUCCESS = 'ALBUM_EDIT_SUCCESS'
export const ALBUM_EDIT_FAILURE = 'ALBUM_EDIT_FAILURE'

export const ALBUM_DELETE = 'ALBUM_DELETE'
export const ALBUM_DELETE_SUCCESS = 'ALBUM_DELETE_SUCCESS'
export const ALBUM_DELETE_FAILURE = 'ALBUM_DELETE_FAILURE'

export function getAlbums(album) {
  return {
    type: INCREMENT_COUNTER,
    album
  };
}

export function getAlbums() {
  return dispatch => {
    dispatch()
  }
}

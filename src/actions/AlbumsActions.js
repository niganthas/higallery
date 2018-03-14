
export const ALBUMS_GET = 'ALBUMS_GET'


export const ALBUM_CREATE = 'ALBUM_CREATE'
export const ALBUM_CREATE_SUCCESS = 'ALBUM_CREATE_SUCCESS'
export const ALBUM_CREATE_FAILURE = 'ALBUM_CREATE_FAILURE'

export const ALBUM_EDIT = 'ALBUM_EDIT'
export const ALBUM_EDIT_SUCCESS = 'ALBUM_EDIT_SUCCESS'
export const ALBUM_EDIT_FAILURE = 'ALBUM_EDIT_FAILURE'

export const ALBUM_DELETE = 'ALBUM_DELETE'
export const ALBUM_DELETE_SUCCESS = 'ALBUM_DELETE_SUCCESS'
export const ALBUM_DELETE_FAILURE = 'ALBUM_DELETE_FAILURE'

export function getAlbums() {
  return {
    type: ALBUMS_GET,
  };
}

export function createAlbum(album) {
  return {
    type: ALBUM_CREATE,
    album
  };
}

export function deleteAlbum(album) {
  return {
    type: ALBUM_DELETE,
    album
  };
}
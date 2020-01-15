// import { statement } from '@babel/template'
import {
  RandomImagesState,
  GET_RANDOM_IMAGES,
  GET_BREED_IMAGES,
  ActionTypes,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from './types'

const initialState: RandomImagesState = {
  images: [],
  favorites: [],
}

export function reducer(state = initialState, action: ActionTypes): RandomImagesState {
  switch (action.type) {
    case GET_RANDOM_IMAGES:
      return {
        ...state,
        images: [action.payload],
      }
    case GET_BREED_IMAGES:
      return {
        ...state,
        images: [action.payload],
      }
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(favorites => favorites !== action.payload),
      }
    default:
      return state
  }
}

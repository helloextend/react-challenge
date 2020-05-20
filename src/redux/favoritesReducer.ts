import { FAVORITE_DOG, UNFAVORITE_DOG } from './types'
import _ from 'lodash'

export const favoritesReducer = (state = {}, action) => {
  switch (action.type) {
    case FAVORITE_DOG:
      return { ...state, [action.payload]: action.payload }
    case UNFAVORITE_DOG:
      return _.omit(state, action.payload)
    default:
      return state
  }
}

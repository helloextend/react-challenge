import { FETCH_DOGS } from './types'

export const dogsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DOGS:
      return { ...state, data: action.payload.data.message }
    default:
      return state
  }
}

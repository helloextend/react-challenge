// import { statement } from '@babel/template'
import { RandomImagesState, GET_RANDOM_IMAGES, ActionTypes } from './types'

const initialState: RandomImagesState = {
  images: [],
}

export function reducer(state = initialState, action: ActionTypes): RandomImagesState {
  switch (action.type) {
    case GET_RANDOM_IMAGES:
      return {
        images: [...state.images, action.payload],
      }
    default:
      return state
  }
}

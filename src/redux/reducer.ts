// import { statement } from '@babel/template'
import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from './actions'

const initialState = {
  random_images: [],
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START:
      return {
        ...state,
        error: '',
      }
    case LOAD_SUCCESS:
      return {
        ...state,
        random_images: action.payload,
      }
    case LOAD_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return initialState
  }
}

import {
  DOGS_DATA_REQUEST,
  DOGS_DATA_SUCCESS,
  DOGS_DATA_FAIL,
  SET_DOG_AS_FAVOURITE,
  REMOVE_DOG_FROM_FAVOURITE,
} from './contants'

export type initialStateType = {
  dogs: { message?: Array<String>; status?: string }
  isLoading: Boolean
  error: String
  favourites: Array<String>
}

export const reducer = (initialState: initialStateType, action) => {
  switch (action.type) {
    case DOGS_DATA_REQUEST:
      return {
        ...initialState,
        isLoading: true,
        dogs: null,
        error: null,
      }
    case DOGS_DATA_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        dogs: action.payload,
        error: null,
      }
    case DOGS_DATA_FAIL:
      return {
        ...initialState,
        isLoading: false,
        dogs: null,
        error: action.payload,
      }
    case SET_DOG_AS_FAVOURITE: {
      const dog = action.payload

      if (initialState.favourites.includes(dog)) return initialState
      return {
        ...initialState,
        favourites: [...initialState.favourites, dog],
      }
    }
    case REMOVE_DOG_FROM_FAVOURITE: {
      const dog = action.payload

      const newFavourites = initialState.favourites.filter((favourite) => favourite !== dog)

      return { ...initialState, favourites: newFavourites }
    }
    default:
      return initialState
  }
}

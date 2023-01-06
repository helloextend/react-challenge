import {
  DOGS_DATA_REQUEST,
  DOGS_DATA_SUCCESS,
  DOGS_DATA_FAIL,
  SET_DOG_AS_FAVOURITE,
  REMOVE_DOG_FROM_FAVOURITE,
} from './contants'

export const fetchDogsData = (breed: string) => async (dispatch) => {
  try {
    dispatch({ type: DOGS_DATA_REQUEST })

    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`)

    if (response.ok) {
      const data = await response.json()
      dispatch({ type: DOGS_DATA_SUCCESS, payload: data })
    } else {
      const data = await response.json()
      if (data.code === 404) {
        dispatch({ type: DOGS_DATA_FAIL, payload: 'Breed not found (master breed does not exist)' })
      } else dispatch({ type: DOGS_DATA_FAIL, payload: 'Oops! something went wrong.' })
    }
  } catch (error) {
    dispatch({ type: DOGS_DATA_FAIL, payload: error.message })
  }
}

export const setDogAsFavorites = (dog: string) => (dispatch) => {
  dispatch({ type: SET_DOG_AS_FAVOURITE, payload: dog })
}

export const removeDogFromFavorites = (dog: string) => (dispatch) => {
  dispatch({ type: REMOVE_DOG_FROM_FAVOURITE, payload: dog })
}

import axios from 'axios'
import { FETCH_DOGS, FAVORITE_DOG } from './types'

export const favoriteDog = (dog: String) => {
  return {
    type: FAVORITE_DOG,
    payload: dog,
  }
}

export const fetchDogs = (breed: string) => async (dispatch) => {
  const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)

  dispatch({ type: FETCH_DOGS, payload: response })
}

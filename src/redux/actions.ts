import axios from 'axios'
import { RandomImages, GET_RANDOM_IMAGES, GET_BREED_IMAGES, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './types'

export const getRandomImages = () => dispatch => {
  return axios
    .get('https://dog.ceo/api/breeds/image/random/10')
    .then(res => {
      dispatch({ type: GET_RANDOM_IMAGES, payload: res.data })
    })
    .catch(err => {
      dispatch({ payload: err })
    })
}

export const getBreedImages = input => dispatch => {
  return axios
    .get(`https://dog.ceo/api/breed/${input}/images/random/10`)
    .then(res => {
      dispatch({ type: GET_BREED_IMAGES, payload: res.data })
    })
    .catch(err => {
      dispatch({ payload: err })
    })
}

export const addToFavorites = str => {
  return {
    type: ADD_TO_FAVORITES,
    payload: str,
  }
}

export const removeFromFavorites = str => {
    return {
      type: REMOVE_FROM_FAVORITES,
      payload: str,
    }
  }

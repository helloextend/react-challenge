import axios from 'axios'
import { RandomImages, GET_RANDOM_IMAGES } from './types'

export const getRandomImages = () => dispatch =>{
  //   return {
  //     type: GET_RANDOM_IMAGES,
  //     payload: images,
  //   }
  return axios
    .get('https://dog.ceo/api/breeds/image/random/10')
    .then(res => {
      dispatch({ type: GET_RANDOM_IMAGES, payload: res.data })
    })
    .catch(err => {
      dispatch({ payload: err })
    })
}

// export function deleteMessage(timestamp: number) {
//   return {
//     type: DELETE_MESSAGE,
//     meta: {
//       timestamp
//     }
//   };
// }

// export const LOAD_START = 'LOAD_START'
// export const LOAD_SUCCESS = 'LOAD_SUCCESS'
// export const LOAD_FAILURE = 'LOAD_FAILURE'

// export const getRandomImages = () => dispatch => {
//   dispatch({ type: LOAD_START })

//   return axios
//     .get('https://dog.ceo/api/breeds/image/random/10')
//     .then(res => {
//       dispatch({ type: LOAD_SUCCESS, payload: res.data })
//     })
//     .catch(err => {
//       dispatch({ type: LOAD_FAILURE, payload: err })
//     })
// }

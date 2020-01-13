import axios from 'axios'

export const LOAD_START = 'LOAD_START'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAILURE = 'LOAD_FAILURE'

export const getRandomImages = () => dispatch => {
  dispatch({ type: LOAD_START })

  return axios
    .get('https://dog.ceo/api/breeds/image/random/10')
    .then(res => {
      dispatch({ type: LOAD_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: LOAD_FAILURE, payload: err })
    })
}

import { createStore } from 'redux'
import { reducer } from './reducer'

const initialState = {
  search: {
    query: '',
    isLoading: false,
    error: '',
    searchedDogs: [],
  },
  favorites: {
    favoriteDogs: [],
  },
}

export default createStore(reducer, initialState)

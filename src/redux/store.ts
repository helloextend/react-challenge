import { createStore } from 'redux'
import { favoriteReducer } from './reducer'


const store = createStore(favoriteReducer)

export default store
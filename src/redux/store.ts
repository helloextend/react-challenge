import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { favoritesReducer } from './favoritesReducer'
import { dogsReducer } from './dogsReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const rootReducer = combineReducers({
  favorites: favoritesReducer,
  dogsList: dogsReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

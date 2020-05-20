import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import { favoritesReducer } from './favoritesReducer'
import { dogsReducer } from './dogsReducer'
import thunk, { ThunkMiddleware } from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const rootReducer = combineReducers({
  favorites: favoritesReducer,
  dogsList: dogsReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

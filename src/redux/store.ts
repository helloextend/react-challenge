import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer } from './reducer'

const initialState = {
  dogs: null,
  error: null,
  isLoading: false,
  favourites: [],
}

const middleware = [thunk]

export default createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

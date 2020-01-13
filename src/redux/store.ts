import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk'

export type AppState = ReturnType<typeof reducer>

export default createStore(reducer, applyMiddleware(thunk))

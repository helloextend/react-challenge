// if there is more diffrent type of reducers we can combine here

import { combineReducers } from 'redux'
import { favreducer } from './reducer'
import { searchreducer } from './searchReducer'

const rootred = combineReducers({
      favreducer,
      searchreducer,
})

export default rootred

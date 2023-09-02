// store.ts
import { configureStore } from '@reduxjs/toolkit'
import favouriteDogSlice from './favouriteDog-slice'
import dogBreed from './listDogs-slice'

const store = configureStore({
  reducer: {
    dogs: favouriteDogSlice,
    dogBreed: dogBreed,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

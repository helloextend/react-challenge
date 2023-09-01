// dogSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DogState {
  images: string[]
}

const initialState: DogState = {
  images: [],
}

const favouriteDogSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<string>) => {
      state.images.push(action.payload)
    },
    removeFromFavourites: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter((name) => name !== action.payload)
    },
  },
})

export const { addToFavourite, removeFromFavourites } = favouriteDogSlice.actions
export default favouriteDogSlice.reducer

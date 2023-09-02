// dogSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DogState {
  breed: string;
}

const initialState: DogState = {
  breed: "affenpinscher",
};

const dogBreedSlice = createSlice({
  name: "dogBreed",
  initialState,
  reducers: {
    dogBreedHandler: (state, action: PayloadAction<string>) => {
      state.breed = action.payload;
    },
    // removeFromFavourites: (state, action: PayloadAction<string>) => {
    // },
  },
});

export const { dogBreedHandler } = dogBreedSlice.actions;
export default dogBreedSlice.reducer;

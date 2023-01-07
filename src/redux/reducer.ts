import { AnyAction } from 'redux'

interface ReducerState {
  favorites: string[]
}

const initialState: ReducerState = {
  favorites: [],
}

export const favoriteReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'FAVORITE':
      if (state.favorites.includes(action.payload)) {
        return { favorites: [...state.favorites.filter((item) => item !== action.payload)] }
      } else {
        return { favorites: [...state.favorites, action.payload] }
      }
    default:
      return state
  }
}

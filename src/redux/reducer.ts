import { ACTION_TYPE } from './actions'

export type DogDataProps = { id: number; url: string }[]
export type StatusProps = 'loading' | 'rejected' | 'completed' | undefined
export type DogsProps = {
  breed: string
  data: DogDataProps
  status: StatusProps
}

export type StateProps = {
  favorites: { id: number; url: string }[]
  dogs: DogsProps
}

const initialState: StateProps = {
  favorites: [],
  dogs: { breed: 'frise', data: [], status: undefined },
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SetDogBreed:
      return {
        ...state,
        dogs: { ...state.dogs, breed: action.payload },
      }
    case ACTION_TYPE.SetDogsData:
      return {
        ...state,
        dogs: action.payload,
      }
    case ACTION_TYPE.AddToFavorite:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    case ACTION_TYPE.RemoveFromFavorite:
      return {
        ...state,
        favorites: state.favorites.filter((dog) => dog.id !== action.payload.id),
      }
    default:
      return state
  }
}

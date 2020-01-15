export interface RandomImages {
  message: string[]
  status: string
}

export interface RandomImagesState {
  images: RandomImages[]
  favorites: string[]
}

export const GET_RANDOM_IMAGES = 'GET_RANDOM_IMAGES'

interface GetRandomImages {
  type: typeof GET_RANDOM_IMAGES
  payload: RandomImages
}

export interface BreedImages {
  message: string[]
  status: string
}

export interface BreedImagesState {
  images: BreedImages[]
}

export const GET_BREED_IMAGES = 'GET_BREED_IMAGES'

interface GetBreedImages {
  type: typeof GET_BREED_IMAGES
  payload: BreedImages
}

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'

interface AddToFavorites {
    type: typeof ADD_TO_FAVORITES
    payload: string
}

export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

interface RemoveFromFavorites {
    type: typeof REMOVE_FROM_FAVORITES
    payload: string
}

export type ActionTypes = GetRandomImages | GetBreedImages | AddToFavorites | RemoveFromFavorites

import { DogsProps } from "./reducer";

export enum ACTION_TYPE {
  'SetDogsData' = 'SetDogsData',
  'AddToFavorite' = 'AddToFavorite',
  'RemoveFromFavorite' = 'RemoveFromFavorite',
  'SetDogBreed' = 'SetDogBreed',
}

export function addToFavorite(payload: { id: number; url: string }) {
  return { type: ACTION_TYPE.AddToFavorite, payload }
}

export function removeFromFavorite(payload: { id: number; url: string }) {
  return { type: ACTION_TYPE.RemoveFromFavorite, payload }
}

export function setDogBreed(payload: string) {
  return { type: ACTION_TYPE.SetDogBreed, payload }
}

export function setDogData(payload: DogsProps) {
  return { type: ACTION_TYPE.SetDogsData, payload }
}

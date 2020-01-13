
export interface RandomImages {
  message: string[]
  status: string
}

export interface RandomImagesState {
  images: RandomImages[]
}

// Describing the different ACTION NAMES available
export const GET_RANDOM_IMAGES = 'GET_RANDOM_IMAGES'
// export const DELETE_MESSAGE = 'DELETE_MESSAGE'

interface GetRandomImages {
  type: typeof GET_RANDOM_IMAGES
  payload: RandomImages
}

// interface DeleteMessageAction {
//   type: typeof DELETE_MESSAGE
//   meta: {
//     timestamp: number
//   }
// }

export type ActionTypes = GetRandomImages
// SendMessageAction | DeleteMessageAction

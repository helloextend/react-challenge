const initialState = {
  carts: [],
}

export const searchreducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_CART':
      return {
        carts: [action.payload],
      }

    default:
      return state
  }
}

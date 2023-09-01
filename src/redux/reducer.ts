const initialState = {
  carts: [],
}

export const favreducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state, // spread operator to remain previous data add new data
        carts: [...state.carts, action.payload],
      }

    case 'RMV_CART':
      const data = state.carts.filter((element) => element !== action.payload)
      return {
        ...state,
        carts: data,
      }

    default:
      return state
  }
}

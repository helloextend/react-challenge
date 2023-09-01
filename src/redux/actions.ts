export const ADD = (item) => {
  return {
    type: 'ADD_CART',
    payload: item,
  }
}

// remove items
export const DLT = (item) => {
  return {
    type: 'RMV_CART',
    payload: item,
  }
}

export const SEARCH = (item) => {
  return {
    type: 'SEARCH_CART',
    payload: item,
  }
}

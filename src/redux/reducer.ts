export const reducer = (state, action) => {
  switch (action.type) {
    case 'search/setQuery':
      return {
        ...state,
        search: { ...state.search, query: action.payload },
      }

    case 'search/setLoading':
      return {
        ...state,
        search: {
          ...state.search,
          searchedDogs: action.payload ? [] : state.search.searchedDogs,
          isLoading: action.payload,
        },
      }

    case 'search/setError':
      return {
        ...state,
        search: {
          ...state.search,
          searchedDogs: [],
          error: action.payload,
          isLoading: false,
        },
      }

    case 'search/setSearchResults':
      return {
        ...state,
        search: {
          ...state.search,
          isLoading: false,
          error: '',
          query: action.payload.query,
          searchedDogs: action.payload.searchedDogs,
        },
      }

    case 'favorites/toggleFavorite':
      const id = action.payload.id
      const favoriteDogs = state.favorites.favoriteDogs
      const isFavorite = favoriteDogs.find((dog) => dog.id === id)

      if (isFavorite) {
        const updatedFavoriteDogs = favoriteDogs.filter((dog) => dog.id !== id)
        return {
          ...state,
          favorites: {
            favoriteDogs: updatedFavoriteDogs,
          },
        }
      }

      return {
        ...state,
        favorites: {
          favoriteDogs: [...favoriteDogs, action.payload],
        },
      }

    default:
      return state
  }
}

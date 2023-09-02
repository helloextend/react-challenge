export function setLoading(isLoading = true) {
  return {
    type: 'search/setLoading',
    payload: isLoading,
  }
}

export function setError(error = 'Something went wrong 😐') {
  return {
    type: 'search/setError',
    payload: error,
  }
}

export function setSearchResults(data, query) {
  // example link: "https://images.dog.ceo/breeds/labrador/n02099712_1941.jpg"
  const cleanedData = data.message.map((link) => {
    const id = query + '_' + link.split(`${query}`).at(1).split('.jpg').at(0).split('/').at(1)
    return { id, imageURL: link }
  })

  return {
    type: 'search/setSearchResults',
    payload: {
      query,
      searchedDogs: cleanedData,
    },
  }
}

export function toggleFavorite(favoriteDog) {
  return {
    type: 'favorites/toggleFavorite',
    payload: favoriteDog,
  }
}

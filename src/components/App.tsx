import React, { FC, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Dogs from './Dogs'
import Search from './Search'
import FavDogList from './FavDogList'

interface BreedImage {
  message: string[]
  status: string
}
interface FavoriteBreed {
  breed: string
  images: string[]
}

const App: FC = () => {
  const [dogsdata, setDogsData] = useState<string[]>([])
  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const [dogImages, setDogImages] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [favorites, setFavorites] = useState<FavoriteBreed[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const url = `https://dog.ceo/api/breed/hound/images`

  useEffect(() => {
    const fetchDogs = async () => {
      const res = await fetch(url)
      const data = await res.json()
      const breedList: string[] = await Object.keys(data.message)
      setDogsData(breedList)
    }
    fetchDogs()
  }, [])

  useEffect(() => {
    if (selectedBreed) {
      setLoading(true)
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`)
        .then((response) => response.json())
        .then((data: BreedImage) => {
          setDogImages(data.message.slice(0, 10))
          setSearchQuery('')
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    }
  }, [selectedBreed])

  const handleDogSearch = () => {
    if (searchQuery) {
      setSelectedBreed(searchQuery)
    }
  }

  const addFavBreed = () => {
    if (selectedBreed && !favorites.some((favorite) => favorite.breed === selectedBreed)) {
      const breedImages = dogImages.map((image) => image)
      setFavorites((prevFavorites) => [
        ...prevFavorites,
        { breed: selectedBreed, images: breedImages },
      ])
    }
    alert('Add to fav list..')
  }

  const fetchFavoriteImages = async () => {
    try {
      const imageData = favorites.map((favourite) =>
        fetch(`https://dog.ceo/api/breed/${favourite}/images/random`)
          .then((res) => res.json())
          .then((data) => data.message),
      )

      const favoriteImages = await Promise.all(imageData)
      setDogImages(favoriteImages)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchFavoriteImages()
  }, [favorites])

  const removeFromFavorites = (breed: string) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.breed !== breed))
  }

  return (
    <Container>
      <Header />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleDogSearch={handleDogSearch}
      />
      <Dogs
        dogImages={dogImages}
        setSelectedBreed={setSelectedBreed}
        favorites={favorites}
        selectedBreed={selectedBreed}
        addFavBreed={addFavBreed}
        removeFromFavorites={removeFromFavorites}
      />
      <HR />
      <FavDogList favorites={favorites} removeFromFavorites={removeFromFavorites} />
    </Container>
  )
}

const HR = styled.hr({
  width: '780px',
  height: '2px',
  color: '#DADADA',
})

const Container = styled.div({
  padding: '20%',
  height: '100%',
  width: '600px',
  paddingTop: '60px',
})

export default App

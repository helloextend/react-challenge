import React, { useState } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import ImageGallery from './ImageGalary';
import Favorites from './Favourites';
import { fetchImagesByBreed } from './Api';

function App() {
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (breed) => {
    try {
      const newImages = await fetchImagesByBreed(breed);
      console.log('API response:', newImages);

      if (Array.isArray(newImages)) {
        setImages(newImages);
      } else {
        console.error('Invalid API response:', newImages);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleFavorite = (imageUrl) => {
    if (!favorites.includes(imageUrl)) {
      setFavorites([...favorites, imageUrl]);
    }
  };

  const handleUnfavorite = (imageUrl) => {
    const newFavorites = favorites.filter((url) => url !== imageUrl);
    setFavorites(newFavorites);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dog Breeds</h1>
      </header>
      <main className="App-main">
        <SearchInput onSearch={handleSearch} />
        <ImageGallery images={images} Favorite={handleFavorite} />
        <hr/>
        <Favorites favorites={favorites} Unfavorite={handleUnfavorite} />
      </main>
    </div>
  );
}

export default App;
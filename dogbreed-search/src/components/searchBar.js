import React, { useState } from 'react';
import { useFavoriteContext } from './favoritecontext';
import '../style/searchBar.css'; 

function DogImages() {
  const [breed, setBreed] = useState('');
  const [images, setImages] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null); // Track hovered image
  const { addToFavorites } = useFavoriteContext();
  const [showPopup, setShowPopup] = useState(false); // State for showing popup

  const fetchImages = async () => {
    if (breed) {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await response.json();

        if (data.status === 'success') {
          setImages(data.message.slice(0, 10));
          setShowPopup(false); // Hide popup on successful fetch
        } else {
          setShowPopup(true); // Show popup on invalid breed
          setImages([]); // Clear images on error
        }
      } catch (error) {
        setShowPopup(true); // Show popup on error
        console.error('Error fetching images:', error);
      }
    }
  };

  return (
    <div className="DogImages">
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search for a breed..."
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <button onClick={fetchImages}>Search</button>
      </div>
      <div className="ImageList">
        {images.map((image, index) => (
          <div
            key={index}
            className="ImageContainer"
            onMouseEnter={() => setHoverIndex(index)} // Show "Favorite" button on hover
            onMouseLeave={() => setHoverIndex(null)} // Hide "Favorite" button when not hovered
          >
            <img src={image} alt={`Dog ${index}`} />
            {hoverIndex === index && (
              <button onClick={() => addToFavorites(image)}>Favorite</button>
            )}
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="Popup">
          <p>Invalid breed entered. Please enter a valid breed name.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default DogImages;
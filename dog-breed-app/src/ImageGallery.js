import React from 'react';

function ImageGallery({ images, onFavorite }) {
  return (
    <div className="images">
      {images.map((imageUrl) => (
        <div key={imageUrl} className="image">
          <img src={imageUrl} alt="Dog" />
          <button onClick={() => onFavorite(imageUrl)}>Favorite</button>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
import React from 'react';

function Favorites({ favorites, onUnfavorite }) {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="favorite-images">
        {favorites.map((imageUrl) => (
          <div key={imageUrl} className="favorite-image">
            <img src={imageUrl} alt="Favorite Dog" />
            <button onClick={() => onUnfavorite(imageUrl)}>Unfavorite</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
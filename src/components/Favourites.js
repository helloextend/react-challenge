import React from 'react';
import { IoIosHeart } from "react-icons/io";

function Favorites({ favorites, Unfavorite }) {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="favorite-images">
        {favorites.map((imageUrl) => (
          <div key={imageUrl} className="favorite-image">
            <img src={imageUrl} alt="Favorite Dog" height="128px" width="128px" />
            <button onClick={() => Unfavorite(imageUrl)}><IoIosHeart color="red"/></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
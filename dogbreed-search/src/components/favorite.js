import React from 'react';
import { useFavoriteContext } from './favoritecontext';
import '../style/favorite.css'; 

function Favorites() {
  const { favorites, removeFromFavorites } = useFavoriteContext();

  return (
    <div className="Favorites">
      <h2 className='fav'>Favorites</h2>
      <div className="FavoriteList">
        {favorites.map((favImage, index) => (
          <div key={index} className="FavoriteImage">
            <img src={favImage} alt={`Favorite Dog ${index}`} />
            <button className="RemoveButton" onClick={() => removeFromFavorites(favImage)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}



export {Favorites};
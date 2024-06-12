import React from 'react'
import styled from '@emotion/styled'
import Loader from './Loader'

const FavDogList = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="favorites">
      <FavoritesContainer>
        <h2>Favorites</h2>
        {favorites.length > 0 ? (
          <FavoriteImageContainer>
            {favorites.map((favorite) => (
              <FavImgContainer>
                {favorite.images.map((image) => (
                  <div style={{ position: 'relative' }}>
                    <FavoriteImage key={image} src={image} alt={favorite.breed} />
                    <FavIcon onClick={() => removeFromFavorites(favorite.breed)}>❤️</FavIcon>
                  </div>
                ))}
              </FavImgContainer>
            ))}
          </FavoriteImageContainer>
        ) : (
          <Loader />
        )}
      </FavoritesContainer>
    </div>
  )
}

const FavoritesContainer = styled.div({
  width: '780px',
  marginTop: '50px',
})

const FavoriteImageContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
})

const FavImgContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '5px',
})

const FavoriteImage = styled.img({
  maxWidth: '150px',
  maxHeight: '150px',
  objectFit: 'cover',
  borderRadius: '5px',
  aspectRatio: '16/9',
  position: 'relative',
})
const FavIcon = styled.span({
  cursor: 'pointer',
  marginleft: '5px',
  color: 'red',
  position: 'absolute',
  right: '5px',
  bottom: '5px',
})

export default FavDogList

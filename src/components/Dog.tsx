import React from 'react'
import styled from '@emotion/styled'

const Dog = ({ image, favorites, selectedBreed, addFavBreed, removeFromFavorites }) => {
  return (
    <ImgContainer className="image-wrapper" key={image}>
      <Image src={image} alt={`${selectedBreed}`} />

      {favorites.includes(selectedBreed) || favorites.includes(image) ? (
        <HeartIcon onClick={() => removeFromFavorites(selectedBreed)}>❤️</HeartIcon>
      ) : (
        <HeartIcon onClick={addFavBreed}>🤍</HeartIcon>
      )}
    </ImgContainer>
  )
}

const ImgContainer = styled.div({
  width: '250px',
  height: '350px',
  position: 'relative',
})

const Image = styled.img({
  width: '250px',
  height: '250px',
  borderRadius: '5px',
  object: 'contain',
  aspectRatio: '16/9',
  position: 'relative',
})

const HeartIcon = styled.span({
  position: 'absolute',
  bottom: '100px',
  right: '10px',
  fontSize: '20px',
  color: 'red',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
})

export default Dog

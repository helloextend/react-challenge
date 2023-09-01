import React from 'react'
import Dog from './Dog'
import styled from '@emotion/styled'

const Dogs = ({
  dogImages,
  setSelectedBreed,
  favorites,
  selectedBreed,
  removeFromFavorites,
  addFavBreed,
}) => {
  return (
    <>
      {setSelectedBreed && (
        <DogContainer>
          {dogImages && Array.isArray(dogImages)
            ? dogImages?.map((image, index) => (
                <Dog
                  key={index}
                  favorites={favorites}
                  image={image}
                  selectedBreed={selectedBreed}
                  addFavBreed={addFavBreed}
                  removeFromFavorites={removeFromFavorites}
                />
              ))
            : null}
        </DogContainer>
      )}
    </>
  )
}

const DogContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gap: '20px',
  paddingTop: '40px',
})

const Para = styled.p({
  width: '500px',
  textAlign: 'center',
  fontSize: '30px',
})

export default Dogs

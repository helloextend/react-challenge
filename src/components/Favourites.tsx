import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import Heart from './Heart'
import Dog from './Dog'
import { defaultRootState } from '../types/dogs-data'

export default function Favourites() {
  const { favourites } = useSelector((state: defaultRootState) => state)

  return (
    <>
      <TitleWrapper>
        <Heart icon="redHeartIcon" alt="red heart icon" />
        <Title>Favorites</Title>
      </TitleWrapper>
      {favourites.length === 0 ? (
        <P>No dogs were added as favorites.</P>
      ) : (
        <FavouriteImagesContainer>
          {favourites?.map((imgLink) => (
            <Dog dog={imgLink} />
          ))}
        </FavouriteImagesContainer>
      )}
    </>
  )
}

const TitleWrapper = styled.div({
  display: 'flex',
  marginTop: '48px',
})

const FavouriteImagesContainer = styled.div({
  margin: '48px auto',
  width: '100%',
  display: 'grid',
  gap: '30px',
  gridTemplateColumns: 'repeat(3, 1fr)',
})

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
  marginLeft: '20px',
})

const P = styled.div({
  marginTop: '10px',
})

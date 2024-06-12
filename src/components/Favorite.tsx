import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { StateProps } from '../redux/reducer'

import Heart from './Heart'
import ImageBox from './ImageBox'
import styled from '@emotion/styled'

const Favorite: FC = () => {
  const dogs = useSelector((state: StateProps) => state.favorites)
  return (
    <div>
      <TitleDiv>
        <Heart icon="redHeartIcon" alt="" />
        <Title>Favorites</Title>
      </TitleDiv>
      <ImagesContainer>
        {dogs.map((dog) => (
          <ImageBox dog={dog} key={dog.id} />
        ))}
      </ImagesContainer>
    </div>
  )
}

const TitleDiv = styled.div({
  display: 'flex',
  alignItems: 'center',
})

const Title = styled.h2({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
  marginLeft: '40px',
})

const ImagesContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  justifyContent: 'flex-start',
})

export default Favorite

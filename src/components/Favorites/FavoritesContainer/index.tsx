import React, { FC } from 'react'
import styled from '@emotion/styled'
import Heart from '../../Heart'
import FavoriteList from '../FavoritesList'

const Favorites: FC = () => {
  return (
    <Container>
      <Heart icon="redHeartIcon" alt="red heart icon" />
      <Title>Favorites</Title>
    </Container>
  )
}

export const Container = styled.div({
  display: 'flex',
})

export const Title = styled.h1({
  paddingLeft: '25px',
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
})

export default Favorites

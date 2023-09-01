import React from 'react'
import styled from '@emotion/styled'
import Heart from './Heart'
import GridFavoriteItem from './GridFavoriteItem'

const Favorites = () => {
  return (
    <Container>
      <Heading>
        <Heart icon="redHeartIcon" alt="red heart icon" />
        <Title>Favorites</Title>
      </Heading>
      <GridFavoriteItem />
    </Container>
  )
}

export default Favorites
const Container = styled.div`
  width: 100%;
  left: 62px;
  position: absolute;
  top: 1036px;
`
const Heading = styled.div`
  display: flex;
`

const Title = styled.div`
  font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 16px;
  margin-left: 25.27px;
  color: #000000;
`

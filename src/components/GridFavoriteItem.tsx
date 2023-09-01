import React from 'react'
import styled from '@emotion/styled'
import Card from './Card'
import { useSelector } from 'react-redux'

// Favorite dog breeds data
const GridFavoriteItem = () => {
  // Redux code
  const getdata = useSelector((state) => state.favreducer.carts)

  // Create a Set to store unique images because there are duplicates
  const uniqueURLs = new Set(getdata)
  const uniqueData = Array.from(uniqueURLs)

  // height
  const propValue1 = '128'
  return (
    <Container>
      <GridContainer>
        {uniqueData.map((imageURL, index) => (
          <Card key={imageURL} prop1={propValue1} prop2={imageURL} />
        ))}
      </GridContainer>
    </Container>
  )
}

export default GridFavoriteItem

const Container = styled.div`
  position: absolute;
  width: 560px;
  top: 56px;
  margin-bottom: 50px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
`

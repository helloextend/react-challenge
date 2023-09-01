import React from 'react'
import styled from '@emotion/styled'
import Card from './Card'

// general dog breeds images
const GridItem = ({ dogs }) => {
  const propValue1 = '160' // height
  const first10Images = dogs.slice(0, 10)
  return (
    <Container>
      <GridContainer>
        {first10Images.map((element, index) => (
          <Card key={index} prop1={propValue1} prop2={element} />
        ))}
      </GridContainer>
      <hr />
    </Container>
  )
}

export default GridItem

const Container = styled.div`
  position: absolute;
  width: 560px;
  left: 60px;
  top: 196px;

  hr {
    position: absolute;
    top: 800px;
    width: 560px;
    border: solid 1px #dadada;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 40px;
  row-gap: 40px;
`

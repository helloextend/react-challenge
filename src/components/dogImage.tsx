import React from 'react'
import styled from '@emotion/styled'
import Heart from './Heart'


function DogImage({ src, icon, onClick }) {
  return (
    <Container>
      <Image src={src} />
      <Icon>
        <Heart onClick={onClick} icon={icon} alt="" />
      </Icon>
    </Container>
  )
}


const Container = styled.div({
  position: "relative"
})

const Image = styled.img({
  width: "160px",
  height: "160px",
  objectFit: "cover",
  borderRadius: "4px",
  "@media (max-width: 600px)": {
    width:'130px',
    height:"130px"
  },
})

const Icon = styled.div({
  position: "absolute",
  bottom: '10px',
  right: '10px',
})

export default DogImage
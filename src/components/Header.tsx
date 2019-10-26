import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

const Header: FC = () => {
  return (
    <Container>
      <Title>Dog Breeds</Title>
      <Heart src={icons.redHeartIcon} alt="Heart icon" />
    </Container>
  )
}

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
})

const Heart = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
})

export default Header

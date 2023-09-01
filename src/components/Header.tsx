import React, { FC } from 'react'
import styled from '@emotion/styled'
import Heart from './Heart'

const Header: FC = () => {
  return (
    <Container>
      <Title>Dog Breeds</Title>
      <Heart icon="redHeartIcon" alt="red heart icon" />
    </Container>
  )
}

const Container = styled.div({
  width: '780px',
  display: 'flex',
  justifyContent: 'space-between',
})

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '28px',
  lineHeight: '33px',
})

export default Header

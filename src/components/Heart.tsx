import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

interface Props {
  icon: string
  alt: string
}

const Heart: FC<Props> = ({ icon, alt }) => {
  return (
    <Container>
      <HeartIcon src={icons[icon]} alt={alt} />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  align-self: center;
`

const HeartIcon = styled.img`
  width: 16.73px;
  height: 15px;
`

export default Heart

import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

interface Props {
  icon: string
  alt: string
}

const Heart: FC<Props> = ({ icon, alt }) => {
  return <HeartIcon src={icons[icon]} alt={alt} />
}

const HeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
})

export default Heart

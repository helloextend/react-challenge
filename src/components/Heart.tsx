import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

interface Props {
  icon: string
  alt: string
  onClick?:React.MouseEventHandler
}

const Heart: FC<Props> = ({ icon, alt,onClick }) => {
  return <HeartIcon onClick={onClick} src={icons[icon]} alt={alt} />
}

const HeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
  cursor:"pointer"
})

export default Heart

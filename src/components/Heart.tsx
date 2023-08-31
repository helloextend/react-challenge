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
const WhiteHeart: FC<Props> = ({icon,alt}) => {
  return <Icon src={icons[icon]} alt={alt} /> 
}
const HeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
})
 const Icon=styled.img({
  width: '15px',
  height: '15px',
 })
export {WhiteHeart} ;
export default Heart
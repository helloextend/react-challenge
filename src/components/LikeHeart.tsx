import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

interface Props {
  icon: string
  alt: string
}

const LikeHeart: FC<Props> = ({ icon, alt }) => {
  return (
    <div>
      <HeartIcon src={icons[icon]} alt={alt} />
    </div>
  )
}

const HeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
  position: 'absolute',
  right: '35px',
  bottom: '15px',
})

export default LikeHeart

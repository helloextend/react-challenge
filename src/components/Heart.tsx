import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'

interface Props {
  icon: string
  alt: string,
  style?: object,
  onClickHeart?: (imgUrl: string) => void,
  url?: string
}

const Heart: FC<Props> = ({ icon, alt, style, onClickHeart, url }) => {
  return <HeartIcon onClick={() => onClickHeart(url)} src={icons[icon]} alt={alt} style={style} />
}

const HeartIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
  ":hover": {
    cursor: 'pointer'
  }
})

export default Heart

import React, { FC } from 'react'
import styled from '@emotion/styled'

import ImageItem from '../ImageItem'

const ImageList: FC = (props) => {
  const images = props.images.map((image) => (
    <ImageItem key={image} image={image} alt="A Picture of a dog" likedCurrently={true} />
  ))
  return <ImageContainer>{images}</ImageContainer>
}

export default ImageList

const ImageContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '40px',
  rowGap: '40px',
  paddingBottom: '40px',
})

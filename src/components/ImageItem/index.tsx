import React, { FC, useState } from 'react'
import styled from '@emotion/styled'
import LikeHeart from '../LikeHeart'
// Redux
import { useDispatch } from 'react-redux'
import { favoriteDog } from '../../redux/actions'

interface ImageItemProps {
  alt: string
  image: string
  likedCurrently: boolean
}

const ImageItem: ImageItemProps = ({ alt, image, likedCurrently }) => {
  const [liked, setLiked] = useState(false)

  const dispatch = useDispatch()
  const handleLike = () => {
    setLiked(true)
    dispatch(favoriteDog(image))
  }

  // if (likedCurrently) handleLike(true)

  return (
    <ImageContainer>
      <ImageSquare src={image} alt={alt} />
      <div onClick={() => handleLike()}>
        <LikeHeart icon={liked ? 'redHeartIcon' : 'whiteHeartIcon'} alt="white heart icon" />
      </div>
    </ImageContainer>
  )
}

const ImageContainer = styled.div({
  position: 'relative',
  flex: '32%',
  marginRight: '10',
  justifyContent: 'space-between',
  marginBottom: '40px',
})

const ImageSquare = styled.img({
  width: '160px',
  height: '160px',
  objectFit: 'cover',
  borderRadius: '4px',
  backgroundColor: 'green',
})

export default ImageItem

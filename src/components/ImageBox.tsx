import React, { FC } from 'react'
import styled from '@emotion/styled'
import Heart from './Heart'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, removeFromFavorite } from '../redux/actions'
import { StateProps } from '../redux/reducer'

const ImageBox: FC<{ dog: { id: number; url: string } }> = ({ dog }) => {
  const { favorites } = useSelector((state: StateProps) => state)
  const dispatch: Dispatch = useDispatch()

  const isImageInFavorites = favorites.find((el) => el.id === dog.id)

  const handelClick = () => {
    if (isImageInFavorites) {
      return dispatch(removeFromFavorite(dog))
    } else dispatch(addToFavorite(dog))
  }

  return (
    <ImageContainer onClick={handelClick}>
      <Image src={dog.url} alt="dog image" />
      <HeartBtn>
        <Heart icon={isImageInFavorites ? 'redHeartIcon' : 'whiteHeartIcon'} alt="" />
      </HeartBtn>
    </ImageContainer>
  )
}

const ImageContainer = styled.div({
  cursor: 'pointer',
  width: '160px',
  height: '160px',
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',

  ':hover': {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    transform: 'translateY(-10px)',
  },
})

const Image = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

const HeartBtn = styled.div({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
})

export default ImageBox

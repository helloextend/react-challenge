import React from 'react'
import styled from '@emotion/styled'
import { setDogAsFavorites, removeDogFromFavorites } from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import Heart from './Heart'
import { defaultRootState } from '../types/dogs-data'

export default function Dog({ dog }: { dog: string }) {
  const { favourites } = useSelector((state: defaultRootState) => state)
  const dispatch = useDispatch()

  const isDogFavourite = () => {
    return favourites.includes(dog)
  }

  const handleFavourite = () => {
    if (isDogFavourite()) {
      dispatch(removeDogFromFavorites(dog))
    } else {
      dispatch(setDogAsFavorites(dog))
    }
  }

  return (
    <DogImageContainer>
      <DogImage src={dog} alt="" key={dog} loading="lazy" />
      <HeartIconPositionContaianer onClick={handleFavourite}>
        <Heart icon={isDogFavourite() ? 'redHeartIcon' : 'whiteHeartIcon'} alt="" />
      </HeartIconPositionContaianer>
    </DogImageContainer>
  )
}

const DogImageContainer = styled.div({
  position: 'relative',
})

const DogImage = styled.img({
  width: '167.92px',
  height: '191.58px',
  objectFit: 'fill',
})

const HeartIconPositionContaianer = styled.div({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
})

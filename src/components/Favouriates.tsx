import React from 'react'
import styled from '@emotion/styled'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import Heart from './Heart'
import DogImage from './dogImage'
import { favoriteFunc } from '../redux/actions'

export default function Favourites() {
  const favlist: string[] = useSelector((state: RootStateOrAny) => state.favorites)
  const dispatch = useDispatch()

  const removefavorite = (url: string) => {
    dispatch(favoriteFunc(url))
  }

  return (
    <>
      <HeadingContain>
        <Heart icon="redHeartIcon" alt="red heart icon" />
        <Heading>Favorites</Heading>
      </HeadingContain>
      {favlist.length === 0 ? (
        <Msg>No dogs in favorites.</Msg>
      ) : (
        <Result>
          {favlist.map((item, index) => {
            return (
              <DogImage key={index} src={item} onClick={() => removefavorite(item)} icon={'redHeartIcon'} />
            )
          })}
        </Result>
      )}
    </>
  )
}

const HeadingContain = styled.div({
  display: 'flex',
  marginTop: '48px',
})



const Heading = styled.h1({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
  marginLeft: '20px',
})

const Result = styled.div({
  margin: '44px auto 0',
  width: '100%',
  display: 'grid',
  gap: '30px',
  gridTemplateColumns: 'repeat(3, 1fr)',
})

const Msg = styled.div({
  marginTop:"20px"
})

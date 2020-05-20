import React, { FC } from 'react'
import ImageList from '../ImageList'
import { useSelector } from 'react-redux'

const FavoriteList: FC = () => {
  const favorites = Object.keys(useSelector((state) => state.favorites))
  return <ImageList images={favorites}></ImageList>
}

export default FavoriteList

import React, { FC } from 'react'
import ImageList from '../ImageList'
import { useSelector } from 'react-redux'

const MainList: FC = () => {
  const dogList = useSelector((state) => state.dogsList)

  if (!dogList.data) {
    return <div>Search for a Dog!</div>
  }
  const dogShortList = dogList.data.slice(0, 12)
  return <ImageList images={dogShortList}></ImageList>
}

export default MainList

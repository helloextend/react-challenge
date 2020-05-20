import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styled from '@emotion/styled'
import Header from '../Header'

import ImageItem from '../ImageItem'
import SearchBar from '../SearchBar'
import FavoritesContainer from '../Favorites/FavoritesContainer'
import Divider from '../Divider'
import FavoriteList from '../Favorites/FavoritesList'
import MainList from '../MainList'
import Padding from '../shared/Padding'

const App: FC = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <Padding />
      <MainList />
      <Divider />
      <FavoritesContainer />
      <Padding />
      <FavoriteList />
    </Container>
  )
}

const Container = styled.div({
  paddingBottom: '40px',
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

export default hot(App)

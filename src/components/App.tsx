import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styled from '@emotion/styled'
import Header from './Header'
import SearchBar from './SearchBar'
import Images from './Images'
import Favorites from "./Favorites"

const App: FC = () => {
  return (
    <Container>
      <Header />
      {/* Happy coding! */}
      <SearchBar />
      <Images />
      <Favorites />
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

export default hot(App)

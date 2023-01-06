import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import SearchBox from './SearchBox'
import SearchResults from './SearchResults'
import Favourites from './Favourites'

const App: FC = () => {
  return (
    <Container>
      <Header />
      <SearchBox />
      <SearchResults />
      <Favourites />
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

export default App

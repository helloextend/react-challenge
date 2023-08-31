import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Home from './Home.js'
import Favorites from './Favorites.js'
const App: FC = () => {
  return (
    <Container>
      <Header />
      <Home/>
      <Favorites/>
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

import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Favourites from './Favourites'
import Main from "./Main"

const App: FC = () => {
  return (
    <Container>
      <Header />
      <Main/>
      <Favourites />
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  width: '560px',
  paddingTop: '60px',
  paddingBottom:'20px',
  "@media (max-width: 500px)": {
    width:'100%',
    padding:'60px 10px 0'
  },
})

export default App
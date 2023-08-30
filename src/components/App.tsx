import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from './Header'

const App: FC = () => {
  return (
    <Container>
      <Header />
      <h1>Search Any Breed Of Dogs</h1>
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

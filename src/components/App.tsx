import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Home from './Home/Home'
import { Provider } from 'react-redux'
import store from '../redux/store'

const App: FC = () => {
  return (
    <Container>
      <Header />
      <Provider store = {store}>
          <Home />
      </Provider>
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

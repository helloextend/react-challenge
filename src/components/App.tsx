import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import styled from '@emotion/styled'
import Header from './Header'
import { colors } from '../assets'

const App: FC = () => {
  return (
    <Container>
      <Header />
      {/* Happy coding! */}
    </Container>
  )
}

const Container = styled.div({
  padding: '60px',
  height: '100%',
  width: '100%',
  background: colors.white,
})

export default hot(App)

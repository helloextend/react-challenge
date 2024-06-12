import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import AppLayout from './AppLayout'

const App: FC = () => {
  return (
    <Container>
      <Header />
      {/* Happy coding! (Ty) */}
      <AppLayout />
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
  '@media only screen and (max-width: 600px)': {
    padding: '40px',
    width: '100%',
  },
})

export default App

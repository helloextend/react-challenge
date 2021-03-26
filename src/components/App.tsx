import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from './Header'

const App: FC = () => {
  return (
    <Container>
      <Header />
      {/* Happy coding! */}
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

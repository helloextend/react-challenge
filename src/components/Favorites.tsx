import * as React from 'react'
import styled from '@emotion/styled'

// interface State {
//   input: string
// }

class Favorites extends React.Component {
  //   state: State = {
  //     input: '',
  //   }

  render() {
    return (
      <>
        <Title>Favorites</Title>
        <Container></Container>
      </>
    )
  }
}

const Title = styled.h1({
  fontWeight: 'bold',
  fontSize: '24px',
  lineHeight: '33px',
  marginTop: '3rem',
  borderTop: '1px solid lightgray',
  paddingTop: '1rem',
})

const Container = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'space-between',
  height: '100vh',
})

const ImageThumbnail = styled.img({
  height: '140px',
  width: '140px',
  objectFit: 'cover',
  margin: '0.5rem',
  borderRadius: '5px',
})

export default Favorites

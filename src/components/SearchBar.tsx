import * as React from 'react'
import styled from '@emotion/styled'

//   type Props {}
interface State {
  input: string
}

class SearchBar extends React.Component {
  state: State = {
    input: '',
  }

  render() {
    return (
      <Container>
        <input></input>
        <button>Search</button>
      </Container>
    )
  }
}

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

export default SearchBar

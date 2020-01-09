import React, { Component } from 'react'
import styled from '@emotion/styled'

export class SearchBar extends Component {
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

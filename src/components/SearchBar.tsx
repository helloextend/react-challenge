import * as React from 'react'
import styled from '@emotion/styled'

export type UpdateInputParam = React.SyntheticEvent<{ value: string }>

interface State {
  input: string
}

class SearchBar extends React.Component {
  state: State = {
    input: '',
  }

  updateInput = (event: UpdateInputParam) => {
    this.setState({ input: event.currentTarget.value })
    console.log(this.state.input)
  }

  searchBreed = e => {
    e.preventDefault()
    const breed = this.state.input
    this.setState({ input: '' })
  }

  render() {
    return (
      <Container>
        <Input
          placeholder="Type a dog breed..."
          value={this.state.input}
          onChange={this.updateInput}
          name="input"
        />
        <Button onClick={this.searchBreed}>Search</Button>
      </Container>
    )
  }
}

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '2rem',
  marginBottom: '2rem',
})

const Input = styled.input({
  width: '100%',
  height: '2rem',
  backgroundColor: '#f7f7f7',
  borderRadius: '5px',
  border: '1px solid #f7f7f7',
})

const Button = styled.button({
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#0794e3',
  color: 'white',
  fontSize: '0.8rem',
  width: '5rem',
  '&:hover': {
    backgroundColor: '#7d7c7b',
  },
})

export default SearchBar

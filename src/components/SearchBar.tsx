import * as React from 'react'
import styled from '@emotion/styled'

import { connect } from 'react-redux'

import { AppState } from '../redux/store'
import { RandomImagesState } from '../redux/types'
import { getBreedImages } from '../redux/actions'

export type UpdateInputParam = React.SyntheticEvent<{ value: string }>

interface ImagesProps {
  getBreedImages: typeof getBreedImages
  images: RandomImagesState
}

interface State {
  input: string
}

class SearchBar extends React.Component<ImagesProps> {
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
    this.props.getBreedImages(breed)
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

const mapStateToProps = (state: AppState) => {
  return {
    images: state.images,
  }
}

export default connect(mapStateToProps, { getBreedImages })(SearchBar)

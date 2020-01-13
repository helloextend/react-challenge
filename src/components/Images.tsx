import React, { Component } from 'react'
import styled from '@emotion/styled'

import { connect } from 'react-redux'
import { getRandomImages } from '../redux/actions'

export class Images extends Component {
  componentDidMount() {}
  render() {
    return <Container></Container>
  }
}

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

const mapStateToProps = state => {
  return {
    ...state,
    random_images: state.random_images,
  }
}

export default connect(mapStateToProps, { getRandomImages })(Images)

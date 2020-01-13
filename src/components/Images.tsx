import * as React from 'react'
import styled from '@emotion/styled'

import { connect } from 'react-redux'

import { AppState } from '../redux/store'
import { RandomImagesState } from '../redux/types'
import { getRandomImages } from '../redux/actions'

interface ImagesProps {
  getRandomImages: typeof getRandomImages
  images: RandomImagesState
}

class Images extends React.Component<ImagesProps> {
  componentDidMount() {
    this.props.getRandomImages()
  }
  render() {
    this.props.images[0] && console.log(this.props.images[0].status)
    return (
      <Container>
        {this.props.images[0] &&
          this.props.images[0].message.map(imageUrl => <ImageThumbnail src={imageUrl} alt="dog" />)}
      </Container>
    )
  }
}

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

const mapStateToProps = (state: AppState) => {
  return {
    images: state.images,
  }
}

export default connect(mapStateToProps, { getRandomImages })(Images)

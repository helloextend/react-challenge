import * as React from 'react'
import styled from '@emotion/styled'

import { connect } from 'react-redux'

import { AppState } from '../redux/store'
import { RandomImagesState } from '../redux/types'
import { getRandomImages, addToFavorites, removeFromFavorites } from '../redux/actions'

import Heart from './Heart'

interface ImagesProps {
  getRandomImages: typeof getRandomImages
  addToFavorites: typeof addToFavorites
  removeFromFavorites: typeof removeFromFavorites
  images: RandomImagesState
  favorites: string[]
}

class Images extends React.Component<ImagesProps> {
  state = {
    color: 'white',
  }

  componentDidMount() {
    this.props.getRandomImages()
  }

  toggleHeart = (e, str) => {
    e.preventDefault()
    if(this.props.favorites.includes(str)){
      this.props.removeFromFavorites(str)
    } else {
      this.props.addToFavorites(str)
    }
  }

  render() {
    return (
      <Container>
        {this.props.images[0] &&
          this.props.images[0].message.map((imageUrl: any, index) => (
            <ImageContainer key={index}>
              <ImageThumbnail src={imageUrl} alt="dog" />
              <ImageIcon onClick={e => this.toggleHeart(e, imageUrl)}>
                {this.props.favorites.length > 0 && this.props.favorites.includes(imageUrl) ? (
                  <Heart icon="redHeartIcon" alt="heart icon" />
                ) : (
                  <Heart icon="whiteHeartIcon" alt="heart icon" />
                )}
              </ImageIcon>
            </ImageContainer>
          ))}
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

const ImageContainer = styled.div({
  position: 'relative',
  height: '140px',
  width: '25%',
  margin: '0.5rem',
  borderRadius: '5px',
})

const ImageThumbnail = styled.img({
  display: 'block',
  objectFit: 'cover',
  height: '100%',
  width: '100%',
  borderRadius: '5px',
})

const ImageIcon = styled.div({
  position: 'absolute',
  bottom: '0',
  right: '3px',
  '&:hover': {
    transform: 'scale(1.2)',
  },
})

const mapStateToProps = (state: AppState) => {
  return {
    images: state.images,
    favorites: state.favorites,
  }
}

export default connect(mapStateToProps, { getRandomImages, addToFavorites, removeFromFavorites })(Images)

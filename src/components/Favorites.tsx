import * as React from 'react'
import styled from '@emotion/styled'

import { connect } from 'react-redux'

import { AppState } from '../redux/store'
import { RandomImagesState } from '../redux/types'
import { addToFavorites, removeFromFavorites } from '../redux/actions'

import Heart from './Heart'

interface FavoritesProps {
  favorites: []
  addToFavorites: typeof addToFavorites
  removeFromFavorites: typeof removeFromFavorites
}

class Favorites extends React.Component<FavoritesProps> {
  toggleHeart = (e, str) => {
    e.preventDefault()
    this.props.removeFromFavorites(str)
  }

  render() {
    return (
      <>
        <Title>Favorites</Title>
        <Container>
          {this.props.favorites.length > 0 &&
            this.props.favorites.map((imageUrl, index) => (
              <ImageContainer key={index}>
                <ImageThumbnail src={imageUrl} alt="dog" />
                <ImageIcon onClick={e => this.toggleHeart(e, imageUrl)}>
                  {this.props.favorites.includes(imageUrl) ? (
                    <Heart icon="redHeartIcon" alt="heart icon" />
                  ) : (
                    <Heart icon="whiteHeartIcon" alt="heart icon" />
                  )}
                </ImageIcon>
              </ImageContainer>
            ))}
        </Container>
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
  height: '100%',
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
    favorites: state.favorites,
  }
}

export default connect(mapStateToProps, { addToFavorites, removeFromFavorites })(Favorites)

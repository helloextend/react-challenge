import React, { Component } from 'react'
import Heart from './Heart'
import PropTypes from 'prop-types'

class FaveDogs extends Component {
  handleUnLikedDog = dogURL => {
    this.props.handleUnLikedDog(dogURL)
  }

  renderFavoriteDogs() {
    return (
      <div className="favoriteWrapper">
        {Object.keys(this.props.favoriteDogs).map((dog, index) => (
          <div className="parent" key={index}>
            <img src={dog} />
            <div className="heartOverlayFaveDog" onClick={() => this.handleUnLikedDog(dog)}>
              <Heart icon="redHeartIcon" alt="red heart icon" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div>
        <div>
          <h2>Favorites:</h2>
        </div>
        {this.props.favoriteDogs ? (
          this.renderFavoriteDogs()
        ) : (
          <p>Add a dog to your favorites by clicking the white heart icon!</p>
        )}
      </div>
    )
  }
}
FaveDogs.propTypes = {
  favoriteDogs: PropTypes.object.isRequired,
  handleUnLikedDog: PropTypes.func.isRequired,
}

export default FaveDogs

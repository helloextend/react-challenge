import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import './dogStyle.module.css'
import FaveDogs from './FaveDogs'
import Heart from './Heart'

class Dogs extends Component {
  constructor(props) {
    super(props)
    this.handleUnLikedDog = this.handleUnLikedDog.bind(this)
    this.state = {
      searchedDogs: [],
      selectBreed: [],
      favoriteDogs: JSON.parse(localStorage.getItem('favoriteDogs')),
    }
  }

  componentDidMount() {
    axios({
      url: `https://dog.ceo/api/breeds/list/all`,
      method: 'get',
    })
      .then(response => {
        let breeds = []
        Object.keys(response.data.message).map(breed => breeds.push({ label: breed, value: breed }))

        this.setState({
          selectBreed: breeds,
        })
      })
      .catch(err => console.log(err.response))
  }

  handleSelect = selected => {
    axios({
      url: `https://dog.ceo/api/breed/${selected.value}/images/random/10`,
      method: 'get',
    })
      .then(response => {
        this.setState({
          searchedDogs: response.data,
        })
      })
      .catch(err => console.log(err.response))
  }

  handleChange = event => {
    let obj = {}
    obj[event.target.id] = event.target.value
    this.setState({
      ...obj,
    })
  }

  handleLikedDog = dogURL => {
    let faveDogs = this.state.favoriteDogs
    faveDogs[dogURL] = true
    this.setFavoriteDog(faveDogs)
  }

  handleUnLikedDog = dogURL => {
    let faveDogs = this.state.favoriteDogs
    delete faveDogs[dogURL]
    this.setFavoriteDog(faveDogs)
  }

  setFavoriteDog(faveDogs) {
    this.setState({
      favoriteDogs: faveDogs,
    })
    localStorage.setItem('favoriteDogs', JSON.stringify(this.state.favoriteDogs))
  }

  renderSearchResults(searchedDogs) {
    return (
      <div className="searchWrapper">
        {searchedDogs.map((dogURL, index) => (
          <div className="parent" key={index}>
            <img src={dogURL} />
            <div className="heartOverlay">
              {dogURL in this.state.favoriteDogs ? (
                <div onClick={() => this.handleUnLikedDog(dogURL)}>
                  <Heart icon="redHeartIcon" alt="red heart icon" />
                </div>
              ) : (
                <div onClick={() => this.handleLikedDog(dogURL)}>
                  <Heart icon="whiteHeartIcon" alt="white heart icon" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  render() {
    let searchedDogs = []
    if (this.state.searchedDogs.message) {
      searchedDogs = this.state.searchedDogs.message
    }

    return (
      <div>
        <Select
          options={this.state.selectBreed}
          onChange={this.handleSelect}
          value={this.state.searchTerm}
          label="breed"
        />

        {searchedDogs.length > 0 ? (
          this.renderSearchResults(searchedDogs)
        ) : (
          <p>Use the dropdown menu to select a breed!</p>
        )}
        <div>
          <FaveDogs
            favoriteDogs={this.state.favoriteDogs}
            handleUnLikedDog={this.handleUnLikedDog}
          />
        </div>
      </div>
    )
  }
}

export default Dogs

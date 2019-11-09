import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ResultsList from './ResultsList/ResultsList';
import FavoritesList from './FavoritesList/FavoritesList';
import { Searches } from '../../assets/custom';

type DogState = {
  results: Array<string>,
  favorites: Array<string>,
  previousSearches: Searches,
}

class MainLayout extends Component<{}, DogState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      results: [''],
      favorites: [''],
      previousSearches: {
        valid: [],
        invalid: []
      }
    };
  }

  componentDidMount() {
    this.setState({
      favorites: JSON.parse(localStorage.getItem('favorites')) || []
    })
  }

  handleSearchClick = (ev) => {
    const searchTerm = ev.target.searchTerm.value
    ev.preventDefault();
    fetch(`https://dog.ceo/api/breed/${searchTerm}/images`)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 'error') {
          const newSearches = {
            valid: this.state.previousSearches.valid,
            invalid: [...this.state.previousSearches.invalid, searchTerm]
          }
          this.setState({
            previousSearches: newSearches
          })
        } else {
          const newSearches = {
            valid: [...this.state.previousSearches.valid, searchTerm],
            invalid: this.state.previousSearches.invalid
          }
          this.setState({
            results: responseJson.message,
            previousSearches: newSearches
          })
        }
      })
      .catch(console.error)
  }

  handleToggleFavorite = (url) => {
    if (this.state.favorites.indexOf(url) === -1) {
      this.setState({
        favorites: [...this.state.favorites, url]
      })
    } else {
      this.setState({
        favorites: this.state.favorites.filter(item => item !== url)
      })
    }

    const newUrls = [...this.state.favorites, url]

    localStorage.setItem('favorites', JSON.stringify(newUrls))
  }


  render() {
    return (
      <>
        <SearchBar handleSearch={this.handleSearchClick} previousSearches={this.state.previousSearches} />
        <ResultsList columnCount={3} clickHeart={this.handleToggleFavorite} imgUrls={this.state.results} favorites={this.state.favorites} />
        <FavoritesList clickHeart={this.handleToggleFavorite} favorites={this.state.favorites} />
      </>
    );
  }
}



export default MainLayout;
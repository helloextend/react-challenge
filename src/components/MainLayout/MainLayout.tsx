import React, { Component } from 'react';
import styled from '@emotion/styled'
import SearchBar from './SearchBar/SearchBar';
import { thisTypeAnnotation } from '@babel/types';
import ResultsList from './ResultsList/ResultsList';
import FavoritesList from './FavoritesList/FavoritesList';

type DogState = {
  results: [string],
  favorites: Array<string>,
}

class MainLayout extends Component<{}, DogState> {

  componentWillMount() {
    this.setState({ results: [''], favorites: [] });
  }

  componentDidMount() {
    this.setState({
      favorites: JSON.parse(localStorage.getItem('favorites'))
    })
  }

  handleSearchClick = (ev) => {
    const searchTerm = ev.target.searchTerm.value
    ev.preventDefault();
    fetch(`https://dog.ceo/api/breed/${searchTerm}/images`)
      .then(response => response.json())
      .then(responseJson => this.setState({ results: responseJson.message }))
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

    localStorage.setItem('favorites', JSON.stringify([...this.state.favorites, url]))
  }


  render() {
    return (
      <>
        <SearchBar handleSearch={this.handleSearchClick} />
        <ResultsList columnCount={3} clickHeart={this.handleToggleFavorite} imgUrls={this.state.results} favorites={this.state.favorites} />
        <FavoritesList clickHeart={this.handleToggleFavorite} favorites={this.state.favorites} />
      </>
    );
  }
}



export default MainLayout;
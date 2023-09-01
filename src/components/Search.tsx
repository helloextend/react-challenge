import styled from '@emotion/styled'
import React from 'react'
import searchIcon from '../assets/icons/search-logo.png'

function Search({ searchQuery, setSearchQuery, handleDogSearch }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }
  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search for a dog"
        value={searchQuery}
        onChange={handleSearch}
      />
      <Button onClick={handleDogSearch}>
        <Img src={searchIcon} alt="searchlogo" />
        Search
      </Button>
    </SearchContainer>
  )
}

const SearchContainer = styled.div({
  width: '780px',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
})

const Input = styled.input({
  width: '100%',
  background: '#F7F7F7',
  height: '36px',
  fontSize: '18px',
  padding: '25px',
  borderRadius: '4px',
  border: 'none',
  outline: 'none',
})

const Button = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '200px',
  background: '#0794E3',
  fontSize: '18px',
  color: '#fff',
  height: '36px',
  padding: '25px',
  borderRadius: '4px',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
})

const Img = styled.img({
  width: '25px',
  height: '25px',
  color: '#fff',
  marginRight: '20px',
})

export default Search

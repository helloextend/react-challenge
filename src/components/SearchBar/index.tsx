import React, { FC, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import searchIcon from '../../assets/icons/search-icon.png'
import { fetchDogs } from '../../redux/actions'

const SearchBar: FC = () => {

  const [query, setQuery] = useState<String>("")

  const dispatch = useDispatch()
  const response = useSelector((state) => state.dogsList)

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Query API
    if (query) {
      dispatch(fetchDogs(query.trim().toLocaleLowerCase()))
      // Clear Search Field
      setQuery('');
    }
  }

  const handleChange = (e: React.ChangeEvent <HTMLInputElement>) => {
    const {value} = e.target;
    setQuery(value);
  }


  return (
    <div>
      <form onSubmit={handleFormSubmit} >
        <div>
          <SearchField type="text" onChange={handleChange} value={query}></SearchField>
          <SearchButton>
              <SearchIcon src={searchIcon}></SearchIcon>
              Search
              </SearchButton>
        </div>
      </form>
    </div>
  )
}

const SearchIcon = styled.img({

    position:'absolute'
    left:'5px',
    top:'5px',
    fontSize:'30px'
})

const SearchField = styled.input({
  width: '455px',
  height: '36px',
  background: '#F7F7F7',
  borderRadius: '4px'
  // Text Style
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '22px',
  color: '#44484C'
})

const SearchButton = styled.button({
    position:'relative',
    textAlign: 'right',
    hight: '36px',
    width: '105px',
    backgroundColor: '#0794E3',
    borderRadius: '4px'
    display: 'inlineBlock',
    // Text Style
    fontFamily: 'Nunito Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '19px'
    color:'#FFFFFF',
    padding: '5px 20px',
    border: 'none',
    }
})

export default SearchBar

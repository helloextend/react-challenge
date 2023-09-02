import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { icons } from '../../assets'
import { setError, setLoading, setSearchResults } from './../../redux/actions.ts'

import 'regenerator-runtime/runtime'
import styled from '@emotion/styled'

function Search() {
  const [localQuery, setLocalQuery] = useState('')

  const { isLoading } = useSelector((store) => store.search)
  const dispatch = useDispatch()

  async function handleFetchResults(e) {
    e.preventDefault()

    if (!localQuery) return
    const query = localQuery.toLowerCase()
    dispatch(setLoading())
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${query}/images/random/10`)
      const data = await response.json()
      if (data.status === 'error') throw new Error(`Failed to find ${localQuery} dogs 😔`)
      dispatch(setSearchResults(data, query))
    } catch (err) {
      dispatch(setError(err.message))
    }
  }

  return (
    <SearchLayout onSubmit={handleFetchResults}>
      <Input type="text" value={localQuery} onChange={(e) => setLocalQuery(e.target.value)} />
      <Button type="button" onClick={handleFetchResults} disabled={isLoading}>
        <SearchIcon src={icons['searchIcon']} alt="search" />
        <span>{isLoading ? 'Loading' : 'Search'}</span>
      </Button>
    </SearchLayout>
  )
}

const SearchLayout = styled.form({
  backgroundColor: '#f7f7f7',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2rem',
  borderRadius: '0.2rem',
  overflow: 'hidden',
  '&:focus-within': {
    boxShadow: 'inset 0 0 0 0.1rem rgb(138,138,138, 0.2)',
  },
})

const Input = styled.input({
  backgroundColor: 'transparent',
  border: 'none',
  width: '100%',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: '#8a8a8a',
  margin: '0.2rem 1rem',
  '&:focus': {
    outline: 'none',
  },
})

const Button = styled.button({
  backgroundColor: '#0794e3',
  alignSelf: 'stretch',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.4rem',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: '#fff',
  border: 'none',
  borderRadius: '0.2rem',
  padding: '0.2rem 0.8rem',
  transition: 'all 0.3s ease-out',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#20afff',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '#20afff',
  },
})

const SearchIcon = styled.img({
  height: '1rem',
  width: '1rem',
})

export default Search

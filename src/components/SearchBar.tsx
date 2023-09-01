import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'
import { SEARCH } from '../redux/actions'
import { useDispatch } from 'react-redux'

const SearchBar = () => {
  // redux call
  const dispatch = useDispatch()

  // state hook for breed and search input
  const [searchTerm, setSearchTerm] = useState(null)
  const [suggestedBreeds, setSuggestedBreeds] = useState([])
  const [isData, setIsData] = useState(false)

  // breed list fetching
  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/list/all')
        const data = await res.json()
        const breeds = Object.keys(data.message)
        setSuggestedBreeds(breeds)
      } catch (error) {
        setIsData(true)
      }
    }
    fetchDogData()
  }, [])

  // Error handle if not fetch suggestion
  if (isData) {
    const data = ['affenpinscher', 'appenzeller', 'australian']
    setSuggestedBreeds(data)
  }
  const send = () => {
    const breedValu = searchTerm
    dispatch(SEARCH(breedValu))
  }

  return (
    <Container>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Affenpinscher"
        list="breed-suggestions"
      />

      <datalist id="breed-suggestions">
        {suggestedBreeds.map((breed, index) => (
          <option key={index} value={breed} />
        ))}
      </datalist>

      <button onClick={send}>
        <SearchIcon src={icons.searchIcon} alt={'search_icon'}></SearchIcon>
        <Title>Search</Title>
      </button>
    </Container>
  )
}

export default SearchBar

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 121px;
  left: 60px;

  input {
    position: relative;
    width: 560px;
    height: 36px;
    border-radius: 4px;
    background-color: #f7f7f7;
    border: none;
    padding: 8px 262px 8px 17px;
    font-family: 'Nunito Sans', sans-serif;
    font-family: Nunito Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    &:hover {
      border: solid 2px #0794e3;
    }
  }

  button {
    display: flex;
    justify-content: space-evenly;
    position: relative;
    margin-top: -36px;
    width: 105px;
    height: 36px;
    left: 455px;
    border: none;
    background-color: #0794e3;
    color: #f7f7f7;
    border-radius: 4px;
    cursor: pointer;
  }
`
const Title = styled.div`
  margin-top: 9px;
  line-height: 19.1px;
  font-size: 14px;
  text-align: center;
  font-weight: 700;
`

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-top: 8px;
`

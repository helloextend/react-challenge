import React, { FC } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets'
import { useDispatch} from 'react-redux'
import { Dispatch } from 'redux'
import { setDogBreed } from '../redux/actions'

const SearchBar :FC= ()=>{
  const [searchTerm , setSearchTerm] = React.useState('')
  const dispatch:Dispatch = useDispatch()

  const handelChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    return setSearchTerm(e.target.value)
  }
  const handelClick = ()=>{
    dispatch(setDogBreed(searchTerm))
    return setSearchTerm('')
  }

  return (
    <FlexContainer>
      <SearchInput onChange={handelChange } value={searchTerm} placeholder='search dog images by breed'/>
      <Button onClick={handelClick}><SearchIcon src={icons.searchIcon} alt=''/>Search</Button>
    </FlexContainer>
  )
} 


const FlexContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginTop: '48px',
  marginBottom: '32px',
})


const SearchInput = styled.input({
  width: '80%',
  font: 'inherit',
  padding: '10px',
  border: '1px solid #ccc',
  borderRightWidth: 0,
  borderRadius: '8px 0 0 8px',
  outline: 'none',  
})

const Button = styled.button({
  cursor: 'pointer',
  width: '20%',
  padding: '10px',
  font: 'inherit',
  backgroundColor: '#0794E3',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRadius: '0 8px 8px 0',
  outline: 'none',
})

const SearchIcon = styled.img({
  width: '17px',
  height: '15px',
  alignSelf: 'center',
  marginRight: '10px',
})

export default SearchBar
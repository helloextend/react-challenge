import React, { FormEvent } from 'react'
import styled from '@emotion/styled'
import { icons } from '../assets/icons'
import { useDispatch } from 'react-redux'
import { fetchDogsData } from './../redux/actions'

export default function SearchBox() {
  const [breed, setBreed] = React.useState('')

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setBreed(event.target.value)
  }

  const dispatch = useDispatch()

  const handleSearch = (event: FormEvent) => {
    event.preventDefault()
    if (breed) dispatch(fetchDogsData(breed))
  }

  return (
    <SearchBoxForm onSubmit={handleSearch}>
      <Input onChange={handleChange} value={breed} required />
      <Button type="submit">
        <img src={icons['searchIcon']} alt="" />
        Search
      </Button>
    </SearchBoxForm>
  )
}

const SearchBoxForm = styled.form({
  margin: '48px auto',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  border: 'none',
})

const Input = styled.input({
  width: '100%',
  display: 'block',
  padding: '8px 17px',
  background: '#F7F7F7',
  border: 'none',
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  color: '#44484C',
})

const Button = styled.button({
  alignSelf: 'stretch',
  padding: '0 16px',
  background: '#0794E3',
  border: 'none',
  color: '#FFFFFF',
  borderRadius: '4px',
  display: 'flex',
  gap: '5px',
  alignItems: 'center',
  justifyContent: 'center',
})

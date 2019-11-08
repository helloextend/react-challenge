import React, { FC } from 'react'
import styled from '@emotion/styled'

import { colors } from '../../../assets/index';

interface Props {
  handleSearch: (event: React.MouseEvent<HTMLFormElement>) => void
}

const SearchBar: FC<Props> = ({ handleSearch }) => {
  return (
    <Form onSubmit={handleSearch}>
      <Input type="text" id="searchTerm" />
      <Button type="submit">Search</Button>
    </Form>
  )
}

const Form = styled.form({
  position: 'relative'
})

const Input = styled.input({
  margin: '30px auto 0',
  width: '560px',
  height: '36px',
  background: colors.mostlyWhiteGrey,
  borderRadius: '4px',
  border: 'none',
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '22px',
  paddingLeft: '20px',
  paddingRight: '125px',
  ":focus": { outline: "none" },

})

const Button = styled.button({
  position: 'absolute',
  left: '455px',
  top: '30px',
  width: '105px',
  height: '36px',
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '19px',
  textAlign: 'center',
  color: colors.white,
  background: '#0794E3',
  borderRadius: '4px',
  border: 'none'
})



export default SearchBar

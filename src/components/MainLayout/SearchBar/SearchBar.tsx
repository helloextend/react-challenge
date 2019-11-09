import React, { FC } from 'react'
import styled from '@emotion/styled'

import { colors } from '../../../assets/index';
import { Searches, countOccurences } from '../../../assets/custom';

interface Props {
  handleSearch: (event: React.MouseEvent<HTMLFormElement>) => void,
  previousSearches: Searches
}

const SearchBar: FC<Props> = ({ handleSearch, previousSearches }) => {
  const renderSearchButtons = (searches) => {
    const allButtons = [];

    const validCount = countOccurences(searches.valid);
    Object.keys(validCount).forEach(item => {
      const times = validCount[item] === 1 ? '' : ` x${validCount[item]}`;
      allButtons.push(<PreviousSearchButton key={item}>{item + times}</PreviousSearchButton>)
    })

    const invalidCount = countOccurences(searches.invalid);
    Object.keys(invalidCount).forEach(item => {
      const times = invalidCount[item] === 1 ? '' : ` x${invalidCount[item]}`;
      allButtons.push(<PreviousSearchButton style={{ color: colors.vividRed, background: colors.veryPaleRed }} key={item}>{item + times}</PreviousSearchButton>)
    })

    return allButtons;
  }
  return (
    <Form onSubmit={handleSearch}>
      <Input type="text" id="searchTerm" />
      <Button type="submit">Search</Button>
      <PreviousSearchContainer>
        {(previousSearches.valid[0] || previousSearches.invalid[0]) && renderSearchButtons(previousSearches)}
      </PreviousSearchContainer>
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

const PreviousSearchContainer = styled.div({
  marginTop: '10px',
  padding: '0 10px',

})

const PreviousSearchButton = styled.button({
  padding: '0 16px',
  height: '32px',
  lineHeight: '16px',
  fontFamily: 'Nunito Sans',
  color: '#64A364',
  borderRadius: '29px',
  border: 'none',
  background: '#E9F9EA',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '12px',
  marginRight: '10px',
  marginBottom: '10px'
})



export default SearchBar

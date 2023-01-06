import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import Dog from './Dog'
import { defaultRootState } from '../types/dogs-data'

export default function SearchResults() {
  const { dogs, isLoading, error } = useSelector((state: defaultRootState) => state)

  if (isLoading) {
    return <>Loading...</>
  }

  if (error) {
    return <>{error}</>
  }

  return (
    <>
      {!dogs?.message ? (
        <p>Please search dogs by their breed to display the results.</p>
      ) : (
        <SearchResultsContainer>
          {dogs?.message?.map((imgLink) => (
            <Dog dog={imgLink} />
          ))}
        </SearchResultsContainer>
      )}
      <Rule />
    </>
  )
}

const SearchResultsContainer = styled.div({
  margin: '48px auto',
  width: '100%',
  display: 'grid',
  gap: '30px',
  gridTemplateColumns: 'repeat(3, 1fr)',
})

const Rule = styled.div({
  border: '1px solid #DADADA',
})

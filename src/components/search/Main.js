import React from 'react'
import { useSelector } from 'react-redux'

import Search from './Search'
import Results from './Results'
import MessageDisplay from './../ui/MessageDisplay'

function Main() {
  const { searchedDogs, error } = useSelector((store) => store.search)

  return (
    <main>
      <Search />
      {searchedDogs.length > 0 && <Results />}
      {searchedDogs.length === 0 && (
        <MessageDisplay>{error ? error : 'Start searching dogs today 🐶'}</MessageDisplay>
      )}
    </main>
  )
}

export default Main

import React, { FC, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import SearchBar from './SearchBar'
import GridItem from './GridItem'
import Favorites from './Favorites'
import { useSelector } from 'react-redux'

const App: FC = () => {
  const [breed, setBreed] = useState('terrier')
  const [dogs, setDogs] = useState([])

  // error handling hooks
  const [dataComming, setDataComming] = useState(false)

  // redux call
  const getdata = useSelector((state) => state.searchreducer.carts)

  // data updates a/c getData from search bar
  useEffect(() => {
    if (getdata.length > 0) {
      const newBreed = getdata[0] //  getdata is an array
      fetchDogData(newBreed)
    } else {
      fetchDogData('affenpinscher')
    }
  }, [getdata])

  const fetchDogData = async (currentBreed) => {
    try {
      const noOfData = 10
      const res = await fetch(`https://dog.ceo/api/breed/${currentBreed}/images/random/${noOfData}`)
      const data = await res.json()
      setDogs(data.message)
      setDataComming(true)
    } catch (error) {
      setDataComming(false)
    }
  }

  return (
    <>
      {dataComming === true ? (
        <Container>
          <Header />
          <SearchBar />
          <>
            <GridItem dogs={dogs} />
          </>

          <Favorites />
          <div></div>
        </Container>
      ) : (
        <NoData>
          <h1>Loading ...</h1>
        </NoData>
      )}
    </>
  )
}

const Container = styled.div({
  position: 'relative',
  alignItems: 'center',
  margin: '0 auto',
  height: '168%',
  width: '681.73px',
  paddingTop: '60px',
})

const NoData = styled.div`
  text-align: center;
  margin-top: 50vh;
`

export default App

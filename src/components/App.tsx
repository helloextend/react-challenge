import React, { FC } from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import SearchBar from './SearchBar'
import ImageBox from './ImageBox'
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../redux/reducer'
import Favorite from './Favorite'
import { setDogData } from '../redux/actions'
import { Dispatch } from 'redux'
import Spinner from './Spinner'
import NoDogImage from './NoDogImage'

const App: FC = () => {
  const { favorites, dogs } = useSelector((state: StateProps) => state)
  const dispatch: Dispatch = useDispatch()

  const getDogs = async (breed: string) => {
    dispatch(setDogData({ breed, data: [], status: 'loading' }))
    try {
      const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
      if (!res.ok) throw new Error()
      const data = await res.json()
      const imgArr = data.message.slice(1, 11)
      const imgData = imgArr.map((el, i) => {
        return {
          id: i + 1,
          url: el,
        }
      })
      return dispatch(setDogData({ breed, data: imgData, status: 'completed' }))
    } catch (error) {
      dispatch(setDogData({ breed: dogs.breed, data: [], status: 'rejected' }))
    }
  }

  React.useEffect(() => {
    getDogs(dogs.breed)
  }, [dogs.breed])

  console.log(dogs)

  return (
    <Container>
      <Header />
      {/* Happy coding! */}
      <SearchBar />
      {dogs.status === 'loading' ? (
        <div
          style={{
            minHeight: '80vh',
            display: 'grid',
            placeContent: 'center',
          }}
        >
          <Spinner />
        </div>
      ) : (
        <>
          {dogs.status === 'rejected' ? (
            <NoDogImage message={`No images found for ${dogs.breed} breed`} />
          ) : (
            <>
              <h2>Showing images of {dogs.breed} dog</h2>
              <ImagesContainer>
                {dogs.data && dogs.data.map((dog) => <ImageBox dog={dog} key={dog.id} />)}
              </ImagesContainer>
            </>
          )}
        </>
      )}
      {favorites.length > 0 && <Favorite />}
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

const ImagesContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  justifyContent: 'space-between',
  paddingBottom: '30px',
  marginBottom: '20px',
  borderBottom: '2px solid #ccc',
})

export default App

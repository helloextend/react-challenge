import React, { FC } from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import FetchFilterDogBreedApi from './FetchFilterDogBreedApi';

const App: FC = () => {
  return (
    <Container>
      {/* <Header /> */}
      {/* Happy coding! */}
      <FetchFilterDogBreedApi></FetchFilterDogBreedApi>
    </Container>
  )
}

const Container = styled.div({
  // margin: '0 auto',
  // height: '100%',
  // width: '560px',
  // paddingTop: '60px',
})

export default App

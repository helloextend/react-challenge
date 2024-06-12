import React, { FC  , useState} from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import SearchBox from './SearchBox/SearchBox'
import DogImages from './DogImages/DogImages'

const App: FC = () => {

  const [dogImages, setDogImages] = useState([]);

  const handleSubmit = async (searchText) => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${searchText}/images/random/10`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDogImages(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };
 
  return (
    <Container>
      <Header />
      <SearchBox onHandleSubmit={handleSubmit} />
      <DogImages images = {dogImages}/>
    </Container>
  )
}

const Container = styled.div({
  margin: '0 auto',
  height: '100%',
  width: '560px',
  paddingTop: '60px',
})

export default App

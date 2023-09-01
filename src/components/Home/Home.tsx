import React, { useState, useEffect } from 'react';
import Favorites from '../Favorites/Favorites';
import HeartIcons from '../../assets/icons/white-heart-icon.png';
import RedHeart from '../../assets/icons/red-heart-icon.png';
import searchIcon from '../../assets/icons/search-icon.png';
import { useSelector, useDispatch } from 'react-redux';
import { itemSelected, itemRejected } from '../../redux/actions';
import styled from '@emotion/styled';

export default function Home() {
  const [searchItem, setSearchItem] = useState('');
  const favoriteImages = useSelector((state) => state) as string[];
  const dispatch = useDispatch();
  const [dogImages, setDogImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');

    fetch('https://dog.ceo/api/breed/hound/images')
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setDogImages(res.message.slice(0, 10));
      })
      .catch(() => {
        setLoading(false);
        setError('Failed to fetch initial dog images');
      });
  }, []);

  function solve() {
    setLoading(true);
    setDogImages([]);
    setError('');

    fetch(`https://dog.ceo/api/breed/${searchItem}/images`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'error') {
          setError('No Data Found For The Given Breed Name');
        } else {
          setDogImages(res.message.slice(0, 10));
        }
      })
      .catch(() => {
        setError('An error occurred while fetching data.');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <SearchContainer>
        <Input
          type='text'
          onChange={(e) => setSearchItem(e.target.value.toLowerCase())}
        />
        <Button  onClick={solve}>
          <SeachIcons src={searchIcon}  alt="Search Icon" />
          Search
        </Button>
      </SearchContainer>

      {loading && <DefaultMess><h1>Loading...</h1></DefaultMess>}

      {error && (
        <DefaultMess>
          <h1>{error}</h1>
        </DefaultMess>
      )}

      {!error && dogImages.length > 0 && (
          <Grid>
          {dogImages.map((image, idx) => (
            <ImageContainer key={idx}>
              <DogPhoto src={image} alt="Dog Photo"  />
              <Icon
                src={favoriteImages.includes(image) ? RedHeart : HeartIcons}
                alt={favoriteImages.includes(image) ? "Red Heart Icon" : "White Heart Icon"}
               
                onClick={() => {
                  if (favoriteImages.includes(image)) {
                    dispatch(itemRejected(image));
                  } else {
                    dispatch(itemSelected(image));
                  }
                }}
              />
            </ImageContainer>
          ))}
          </Grid>
      )}

      <HorizontalLine />

      <Favorites />
    </div>
  );
}

const SearchContainer = styled.div({
  textAlign: 'center',
  marginTop: '30px',
  marginBottom: '40px',
});

const DefaultMess = styled.div({
  textAlign: 'center',
});

const DogPhoto = styled.img({
  width: '160px',
  height: '160px'
})

const Grid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
  gap: '20px',
  marginTop: '25px',
  marginBottom: '30px',
  width: '100%',
  placeItems: 'center',
})

const Icon = styled.img({
  position: 'absolute',
  right: '5px',
  bottom: '10px'

})

const ImageContainer = styled.div({
  position:'relative',
})

const Input = styled.input({
  // display:'block',
  width:'80%',
  height : '40px',
  paddingLeft: '10px',
  backgroundColor: '#F7F7F7',
  borderRadius: '5px',
   border: 'none'
  
})

const Button = styled.button({
  width:'105px',
  height:'40px',
  backgroundColor: '#0794E3',
  border: 'none',
  borderRadius: '3px',
  position: 'relative'
})

const SeachIcons = styled.img({
  position: 'absolute',
  top: '13px',
  left: '11px',
  height: '15px',
})

const HorizontalLine = styled.hr({
  border: '1px solid #E5E5E5',
  marginTop: '30px',
  marginBottom: '30px',
})
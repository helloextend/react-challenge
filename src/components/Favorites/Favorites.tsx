import React from 'react';
import RedHeart from '../../assets/icons/red-heart-icon.png'
import { useSelector,useDispatch } from 'react-redux';
import {itemRejected} from '../../redux/actions'
import styled from '@emotion/styled';


export default function Favorites() {

  let favoriteImages = useSelector((state) => state) as string[];
  let dispatch = useDispatch();


  return (
    <div >
      <VStack>
     <img src={RedHeart} alt="Heart Icon" />  
       <h1 >Favorites</h1>
       </VStack>
        {favoriteImages.length ?  <FavoriteItems><Grid >
       { favoriteImages.map((image,idx)=>{
            return(
               <ImageContainer  key={idx}>
                 <DogPhoto src={image} alt="Dog Photo"  />  
                 <Icon src={RedHeart} alt="Red heart" onClick={()=>{
                   dispatch(itemRejected(image))
            }} />
                </ImageContainer> 
            )
        })
      }
       </Grid>
       </FavoriteItems> 
        :
        <DefaultMess>
         <h1>Please Add Items </h1>
         </DefaultMess>
     }
       
    </div>
  )
}

const VStack = styled.div({
  display:'flex',
  alignItems:'center',
  gap:'10px'
});

const DefaultMess = styled.div({
  textAlign: 'center',
  paddingBottom: '35px',
  marginTop: '20px',
})

const FavoriteItems = styled.div({
  paddingBottom: '20px',
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

const ImageContainer = styled.div({
  position:'relative',
})

const DogPhoto = styled.img({
  width: '160px',
  height: '160px'
})

const Icon = styled.img({
  position: 'absolute',
  right: '5px',
  bottom: '10px'

})
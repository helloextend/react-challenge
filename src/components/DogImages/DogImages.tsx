import React, {useState} from 'react';
import './DogImages.css'
import rlike from '../../assets/icons/red-heart-icon.png'
import wlike from '../../assets/icons/white-heart-icon.png'

const DogImages = ({images }) => {

    const [likedImages, setLikedImages] = useState([]);

    const toggleLike = (imageUrl) => {
    if (likedImages.includes(imageUrl)) {
        setLikedImages(likedImages.filter((url) => url !== imageUrl));
    } 
    else {
        setLikedImages([...likedImages, imageUrl]);
        }
    };

    return (
        <div className='image-div'>
          <div className='images'>
            {images.map((image, index) => (
              <div key={index} className = "img-container">
                <img src={image}  className='image' alt={`${index}` } />
                <button onClick={() => toggleLike(image)}>
                {likedImages.includes(image) ? 
                    (<img src = {rlike} className="like" />) :
                    (<img src = {wlike} className="like" />)
                }
                </button>
              </div>
            ))}
          </div>
          <div className="favorite"></div>
          <p><img src={rlike} alt="" /><span>Favorites</span> </p>
          <div className="images ">
            
            {likedImages.map((image, index) => (
              <div key={index} className = "img-container">
                <img src={image}  className='image' alt={`${index}` } />
                <img src = {rlike} className="like" onClick={() => toggleLike(image)}/> :
              </div>
            ))}
          </div>
        </div>
    );
};

export default DogImages;
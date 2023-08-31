import React from 'react';
import { IoIosHeartEmpty } from "react-icons/io";

function ImageGallery({ images, Favorite }) {
  return (
    <div className="images">
      {images.map((imageUrl) => (
        <div key={imageUrl} className="image">
          <img src={imageUrl} alt="Dog"/>
          <button onClick={(e) => {
            Favorite(imageUrl)}}><IoIosHeartEmpty/></button>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
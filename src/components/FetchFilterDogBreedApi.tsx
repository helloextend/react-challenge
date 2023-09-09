import React, { useEffect, useState } from "react";
import "./FetchFilterDogBreedApi.css";

function FetchFilterDogBreedApi() {
  const [data, setData] = useState({ message: [], status: "idle" }); // to get api list
  const [searchTitle, setSearchTitle] = useState(""); // to filter the result
  const [favorites, setFavorites] = useState([]); // Initialize favorites as an empty array

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/hound/images")
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setData({ message: result.message, status: "success" });
      })
      .catch((err) => {
        console.log(err);
        setData({ message: [], status: "error" });
      });
  }, []);

  // To select toggle button favorites and unfavorites
  const toggleFavorite = (image) => {
    if (favorites.includes(image)) {
      setFavorites(favorites.filter((fav) => fav !== image));
    } else {
      setFavorites([...favorites, image]);
    }
  };

  // Filter the images based on the search input
  const filteredImages = data.message.filter((item) =>
    item.toLowerCase().includes(searchTitle.toLowerCase())
  );

  // Limit the displayed images to the first 10
  const displayedImages = filteredImages.slice(0, 10);

  return (
    <div> 
    <h2 className="dog_breed">Dog Breeds</h2>
    {/* Input box to search result */}
      <input
        type="text"
        onChange={(e) => setSearchTitle(e.target.value)}
        placeholder="Search for a breed..."
        className="filter_box"
      ></input><i className="fa fa-search" />
      <br></br>

      {/* map loop to display all images in box*/}
      {data.status === "success" ? (
        <div className="row">
          {displayedImages.map((item, index) => (
            <div className="column image-container" key={index}>
              <img
                src={item}
                alt={`Dog ${index}`}
                className="img-thumbnail rounded"
                style={{ width: "100%", height: "300px" }}
              />
              {/* add favoriote toggle button */}
              <button
                onClick={() => toggleFavorite(item)}
                style={{
                  fontSize: "30px",
                  color: favorites.includes(item) ? "grey" : "white", // Change color based on favorite status
                  backgroundColor: "transparent",
                  border: "none",
                }}
                className="favorite-button"
              >
                &hearts;
              </button>
            </div>
          ))}
        </div>
        
      ) : data.status === "error" ? (
        <p>No images available</p>
      ) : (
        <p>Loading...</p>
      )}
      <hr></hr>
      <br></br>
      <div className="row">
        {favorites.length > 0 && <h2>Favorites</h2>}
        {favorites.map((fav, index) => (
          <div className="column image-container" key={index}>
            <img src={fav} alt={`Dog ${index}`} className="img-thumbnail"  style={{ width: "100%", height: "300px" }}/>
            <button
              onClick={() => toggleFavorite(fav)}
              style={{
                fontSize: "30px",
                color: "red",
                backgroundColor: "transparent",
                border: "none",
              }}
              className="favorite-button"
            >
              &hearts;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchFilterDogBreedApi;
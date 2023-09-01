import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import useHttps from "../hooks/use-https";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import {
  addToFavourite,
  removeFromFavourites,
} from "../redux/favouriteDog-slice";
import redHeart from "../assets/icons/red-heart-icon.png";
import whiteHeart from "../assets/icons/white-heart-icon.png";
import loading from "../assets/dog_loading_gif.gif";
import { colors } from "../assets/colors";

const DogList: FC = () => {
  const { isLoading, sendRequest } = useHttps();
  interface DogListItem {
    id: number;
    dogImage: string;
  }

  // or using type

  // Usage in your component
  const [dogList, setDogList] = useState<DogListItem[]>([]);

  const breed = useSelector((state: RootState) => state.dogBreed.breed);
  const favouriteDogs = useSelector((state: RootState) => state.dogs.images);

  const dispatch = useDispatch();

  const fetchData = (data: { message: string[]; status: string }) => {
    const loadedData = data.message.map((dog) => ({
      id: Math.random() * 100000,
      dogImage: dog,
    }));
    setDogList(loadedData);
  };

  const addOrRemoveFromFavouritesHandler = (img: string) => {
    if (favouriteDogs.find((image) => img === image)) {
      dispatch(removeFromFavourites(img));
    } else {
      dispatch(addToFavourite(img));
    }
  };

  // const likedDogsHandler = () => {};

  useEffect(() => {
    console.log(breed);
    let urlForBreed =
      "https://dog.ceo/api/breed/" +
      breed.toLowerCase().trim() +
      "/images/random/10";
    if (breed === "") {
      alert("please don't leave it empty");
      return;
      // urlForBreed = "https://dog.ceo/api/breed/affenpinscher/images/random/10";
    } else {
      sendRequest({ url: urlForBreed }, fetchData);
    }
  }, [breed, sendRequest]);

  // Log the updated dogList when it changes
  // useEffect(() => {
  //   console.log(dogList);
  // }, [dogList]);

  return (
    <div>
      {!isLoading ? (
        <Container>
          {dogList.map((dog, index) => (
            <div key={index} style={{ position: "relative" }}>
              <Dog src={dog.dogImage} alt={breed} key={index}></Dog>
              <img
                src={
                  favouriteDogs.find((img) => dog.dogImage === img)
                    ? redHeart
                    : whiteHeart
                }
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
                alt=""
                onClick={() => addOrRemoveFromFavouritesHandler(dog.dogImage)}
              />
            </div>
          ))}
        </Container>
      ) : (
        <div
          style={{ width: "560px", display: "flex", justifyContent: "center" }}
        >
          <img src={loading} alt="" style={{ margin: "auto" }}></img>
        </div>
      )}
      {/* <span
        style={{ width: "560px", height: "1px", backgroundColor: "black" }}
      ></span> */}
      {/* <hr style={{ color: "#DADADA" }} /> */}
      <FTContainer>
        <img src={redHeart} alt=""></img>
        <h2 style={{ marginLeft: "30px", fontWeight: "700", fontSize: "24px" }}>
          Favorites
        </h2>
      </FTContainer>
      {!(favouriteDogs.length === 0) ? (
        <FContainer>
          {favouriteDogs.map((Image) => (
            <div
              style={{ position: "relative", width: "128px", height: "128px" }}
              key={Math.random()}
            >
              <FDog src={Image} alt="Favourite"></FDog>
              <img
                src={redHeart}
                alt=""
                onClick={() => addOrRemoveFromFavouritesHandler(Image)}
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
        </FContainer>
      ) : (
        <p
          style={{
            textAlign: "center",
            margin: "50px",
            color: colors.softRed,
          }}
        >
          No favorites
        </p>
      )}
    </div>
  );
};

const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "34px",
  alignItems: "center",
  // padding: "10px",
  justifyItems: "center",
  justifyContent: "start",
  width: "560px",
  marginTop: "34px",
  paddingBottom: "34px",
  borderBottom: "1px solid" + colors.lightGary,
});

const FContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
  width: "560px",
  marginTop: "34px",
  marginBottom: "34px",
  gap: "17px",
});
const FTContainer = styled.div({
  display: "flex",
  width: "560px",
  height: "25px",
  marginTop: "34px",
  // marginBottom: "34px",
  alignItems: "center",
  justifyContent: "flex-start",
});

const Dog = styled.img({
  width: "160px",
  height: "160px",
  borderRadius: "5px",
});
const FDog = styled.img({
  width: "128px",
  height: "128px",
  borderRadius: "5px",
});

export default DogList;

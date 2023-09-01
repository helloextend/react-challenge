import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { colors } from "../assets";
import { icons } from "../assets/icons/index";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { dogBreedHandler } from "../redux/listDogs-slice";

const Search_Bar: FC = () => {
  const [dogBreed, setDogBreed] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDogBreed(e.target.value);
  };

  const breed = useSelector((state: RootState) => state.dogBreed.breed);
  const dispatch = useDispatch();

  const searchForDogsHandler = () => {
    // e.preventDefault();
    dispatch(dogBreedHandler(dogBreed));
    console.log("breed->", breed);
  };

  return (
    <Container>
      <SearchBar>
        <input
          id="searchBox"
          placeholder="Affenpinscher"
          style={{
            width: "281px",
            marginLeft: "17px",
            fontFamily: "Nunito sans",
            fontSize: "16px",
            letterSpacing: "0px",
            textAlign: "left",
            backgroundColor: colors.mostlyWhiteGrey,
            border: "none",
          }}
          onChange={inputHandler}
        />
        <button
          style={{
            width: "105px",
            height: "36px",
            backgroundColor: colors.blue,
            borderRadius: "4px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            border: "none",
            cursor: "pointer",
          }}
          onClick={searchForDogsHandler}
        >
          <img
            src={icons.searchIcon}
            alt="search icon"
            style={{ width: "20px", height: "20px" }}
          ></img>
          <span
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: "12px",
              textAlign: "center",
            }}
          >
            Search
          </span>
        </button>
      </SearchBar>
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "64px",
});

const Title = styled.h1({
  fontWeight: "bold",
  fontSize: "24px",
  lineHeight: "33px",
});
const SearchBar = styled.div({
  width: "560px",
  height: "36px",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.mostlyWhiteGrey,
  justifyContent: "space-between",
  overflow: "hidden",
});

export default Search_Bar;

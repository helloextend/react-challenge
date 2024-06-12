import React, { FC } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import SearchBar from "./SearchBar";
import DogList from "./DogList";

const App: FC = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
      <DogList />
    </Container>
  );
};

const Container = styled.div({
  margin: "0 auto",
  height: "100%",
  width: "560px",
  paddingTop: "60px",
  marginBottom: "34px",
});

export default App;

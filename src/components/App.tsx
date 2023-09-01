import React, { FC } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import Search_Bar from "./SearchBar";
import DogList from "./DogList";

const App: FC = () => {
  // const [breed, setBreed] = useState('')
  // const dogBreed = (dogBreed) => {
  //   setBreed(dogBreed)
  // }

  return (
    <Container>
      <Header />
      <Search_Bar />
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

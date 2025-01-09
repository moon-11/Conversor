import React from "react";
import Converter from "./Components/Convert";
import GlobalStyles from "./Styles/GlobalStyles";

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Converter />
    </>
  );
};

export default Home;

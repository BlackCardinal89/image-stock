import React from "react";
import Content from "../components/Content/Content";
import Picture from "../components/Picture/Picture";

const Home = ({
  isGrid,
  toggleGrid,
  photos,
  handleFavoriteClick,
  handleCheckoutClick
}) => {

  return (
    <>
      <Content 
        isGrid={isGrid} 
        toggleGrid={toggleGrid} 
        />
      <Picture
        isGrid={isGrid}
        photos={photos}
        handleFavoriteClick={handleFavoriteClick}
        handleCheckoutClick={handleCheckoutClick}
      />
    </>
  );
};

export default Home;

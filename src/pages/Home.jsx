import React from "react";
import Content from "../components/Content/Content";
import Picture from "../components/Picture/Picture";

const Home = ({ isGrid, toggleGrid, photos, handleFavoriteClick }) => {

  return (
    <>
      <Content isGrid={isGrid} toggleGrid={toggleGrid} />
      <Picture handleFavoriteClick={handleFavoriteClick} isGrid={isGrid} photos={photos} />
    </>
  );
};

export default Home;

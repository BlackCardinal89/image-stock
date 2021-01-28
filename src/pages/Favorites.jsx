import React from "react";
import Content from "../components/Content/Content.jsx";
import Picture from "../components/Picture/Picture.jsx";
import "./Favorites.css";

function Favorites(props) {
  return (
    <>
      <h2 className="name-menu">Избранное</h2>
      <Content 
        isGrid={props.isGrid} 
        toggleGrid={props.toggleGrid}
      />
      <Picture
        isGrid={props.isGrid}
        photos={props.favorites}
        handleFavoriteClick={props.handleFavoriteClick}
        handleCheckoutClick={props.handleCheckoutClick}
      />
    </>
  );
}

export default Favorites;

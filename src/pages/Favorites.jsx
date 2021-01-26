import React from "react";
import Content from "../components/Content/Content.jsx";
import Picture from "../components/Picture/Picture.jsx";
import "./Favorites.css";

function Favorites(props) {
  return (
    <>
      <h2 className="name-menu">Избранное</h2>
      <Content isGrid={props.isGrid} toggleGrid={props.toggleGrid} />
      <Picture
        photos={props.favorites}
        handleFavoriteClick={props.handleFavoriteClick}
        isGrid={props.isGrid}
      />
    </>
  );
}

export default Favorites;

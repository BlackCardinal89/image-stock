import React from "react";
import favorite_24px from "../assets/favorite_24px.png";
import shopping_cart from "../assets/shopping_cart-64.png";
import maximize_2 from "../assets/maximize-2.png";
import arrow_up from "../assets/arrow_up.png";
import { Link } from "react-router-dom";
import "./Picture.css";

function Picture(props) {
  return (
    <div className={props.isGrid ? "grid" : "list"}>
      {props.photos.map((photo) => {
        return (
          <div className="photo-content" key={photo.id}>
            <img
              className="picture-specifications"
              src={photo.urls.small}
              alt=""
            />
            <div className="photo-info">
              <img src={photo.user.profile_image.medium} alt="" />
              <h2>{photo.user.name}</h2>
              <h3>@{photo.user.username}</h3>
            </div>
            <div className="photo-buttons">
              <button
                onClick={() => props.handleFavoriteClick(photo.id)}
                className="info-buttons"
              >
                <img src={favorite_24px} alt="" />
              </button>
              <button className="info-buttons">
                <Link to={`detailed/${photo.id}`}>
                  <img src={maximize_2} alt="" />
                </Link>
              </button>
              <button
                onClick={() => props.handleCheckoutClick(photo.id)}
                className="info-buttons"
              >
                <img src={shopping_cart} alt="" />
              </button>
            </div>
          </div>
        );
      })}
      <Link to="/" className="button-top">
        <img src={arrow_up} alt="" />
      </Link>
    </div>
  );
}

export default Picture;

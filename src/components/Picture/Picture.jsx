import { useState } from "react";
import favorite_24px from "../assets/favorite_24px.png";
import shopping_cart from "../assets/shopping_cart.png";
import maximize_2 from "../assets/maximize-2.png";
import arrow_up from "../assets/arrow_up.png";
import { Link } from "react-router-dom";
import "./Picture.css";

function Picture(props) {

  const [like, setLike] = useState([]);

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
                onClick={() => setLike(like + 1)}
                className="info-buttons"
              >
                <img src={favorite_24px} alt="" />
              </button>
              <button className="info-buttons">
                <img src={maximize_2} alt="" />
              </button>
              <button 
                className="info-buttons"
                onClick={() => {
                  
                }}
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

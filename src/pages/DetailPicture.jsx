import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import favoritesBtn from "../components/assets/favorite_24px.png";
import shopping_cart2 from "../components/assets/shopping_cart-64.png";
import "./DetailPicture.css";

function DetailPicture(props) {
  const { id } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [loading, setLoading] = useState(false);

  const loadSelectedPhoto = async () => {
    setLoading(true);
    const targetPhoto = await props.photos.find((photo) => photo.id === id);
    setSelectedPhoto(targetPhoto);
    setLoading(false);
  };

  useEffect(() => {
    loadSelectedPhoto();
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <div className="picture-content">
          <div
            className="full-background-picture"
            style={
              selectedPhoto
                ? { backgroundImage: `url(${selectedPhoto?.urls?.full} )` }
                : {}
            }
          ></div>
          <div className="detail-picture">
            <div className="picture-controls">
              <div className="data-user">
                <div className="avatar-user">
                  <img
                    src={selectedPhoto?.user?.profile_image?.medium}
                    alt=""
                  />
                </div>
                <div className="info-user">
                  <span>{selectedPhoto?.user?.name}</span>
                  <span>@{selectedPhoto?.user?.username}</span>
                </div>
              </div>
              <div className="addition-button">
                <button
                  onClick={() => props.handleFavoriteClick(selectedPhoto.id)}
                >
                  <img src={favoritesBtn} alt="" />
                </button>
                <button
                  onClick={() => props.handleCheckoutClick(selectedPhoto.id)}
                >
                  <img src={shopping_cart2} alt="" />
                </button>
              </div>
            <div
              className="small-background-picture"
              style={
                selectedPhoto
                ? { backgroundImage: `url(${selectedPhoto?.urls?.full} )` }
                : {}
              }
              >
            </div>
              </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailPicture;

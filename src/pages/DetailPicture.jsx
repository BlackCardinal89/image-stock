import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import favoritesBtn from "../components/assets/favorites.png";
import shopping_cart2 from "../components/assets/shopping_cart.png";
import link_1 from "../components/assets/link.png";
import { Link } from "react-router-dom";
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.loadSelectedPhoto]);

  return (
    <>
      {loading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <div className="fulldetail-picture">
          <div
            className="fullpicture"
            style={
              selectedPhoto
                ? { backgroundImage: `url(${selectedPhoto?.urls?.full} )` }
                : {}
            }
          ></div>
          <div className="fullpicture-content">
            <div className="photo-controls">
              <div id="user-info">
                <div className="user-photo">
                  <img
                    src={selectedPhoto?.user?.profile_image?.medium}
                    alt=""
                  />
                  <div className="user-info">
                    <span>{selectedPhoto?.user?.name}</span>
                    <span>@{selectedPhoto?.user?.username}</span>
                  </div>
                  <div className="button-info">
                    <button className="btn-fav"
                      onClick={() => props.handleFavoriteClick(selectedPhoto.id)}
                    >
                    <img src={favoritesBtn} alt="" />
                  </button>
                  </div>
                  <div className="button-info">
                    <button
                      onClick={() => props.handleCheckoutClick(selectedPhoto.id)}
                    >
                    <img src={shopping_cart2} alt="" />
                  </button>
                </div>
                <div className="button-info">
                    <button
                      onClick={() => props.handleCheckoutClick(selectedPhoto.id)}
                    >
                      <Link to={`${selectedPhoto?.urls?.full}`}>
                        <img src={link_1} alt="" />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
          className="picture-underground"
            style={
              selectedPhoto
                ? { backgroundImage: `url(${selectedPhoto?.urls?.full} )` }
                : {}
              }
            ></div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailPicture;

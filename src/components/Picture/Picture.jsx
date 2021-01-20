import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import favorite_24px from "../assets/favorite_24px.png";
import download_24px from "../assets/download_24px.png";
import maximize_2 from "../assets/maximize-2.png";
import "./Picture.css";

function Picture(props) {
  const unsplash = createApi({
    accessKey: "BRJzDmpI4J9H8KTIX7NuwWdjuJb74DCDDv1vwcxqGLA",
  });

  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const data = await unsplash.photos.list();
    setPhotos(data.response.results);
  };

  useEffect(() => {
    fetchPhotos();
  });

  const [like, setLike] = useState([]);

  return (
    <div className={props.isGrid ? "grid" : "list"}>
      {photos.map((photo) => {
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
              <button className="info-buttons">
                <img src={download_24px} alt="" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Picture;

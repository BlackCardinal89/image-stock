import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./DetailPicture.css";

function DetailPicture(props) {
  const { id } = useParams();
  const [selectedPhoto, setSelectedPhoto] = useState({});
  useEffect(() => {
    const targetPhoto = props.photos.find((photo) => photo.id === id);
    setSelectedPhoto(targetPhoto);
  }, []);

  return (
    <>
      <div className="fulldetail-picture">
        <div className="fullpicture">
          <img
            className="fullpicture-background"
            src={selectedPhoto?.urls?.regular}
            alt={selectedPhoto?.alt_description}
          />
          <div className="user-photo">
<<<<<<< HEAD
            <img src={selectedPhoto?.user?.profile_image?.medium} alt="" />
          </div>
          <div className="user-info">
            <h4>{selectedPhoto?.user?.name}</h4>
            <h4>@{selectedPhoto?.user?.username}</h4>
=======
            <img src={selectedPhoto?.user?.profile_image?.small} alt="" />
          </div>
          <div className="user-info">
            <h5>{selectedPhoto?.user?.name}</h5>
            <h6>@{selectedPhoto?.user?.username}</h6>
>>>>>>> 0a8646a2ab3b849d419b9cfbb81d441049038f69
          </div>
          <img
            className="picture-underground"
            src={selectedPhoto?.urls?.small}
            alt={selectedPhoto?.alt_description}
          />
        </div>
      </div>
    </>
  );
}

export default DetailPicture;

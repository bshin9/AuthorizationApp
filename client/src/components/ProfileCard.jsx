import React from "react";

const ProfileCard = ({ name, price, image, description }) => {
  return (
    <div className="card-group">
      <div className="card products">
        <img src={image} className="card-img-top" alt="properwatches" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

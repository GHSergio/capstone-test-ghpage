import React from "react";

const Card = ({ title, type, imageUrl }) => {
  // console.log(title, type, imageUrl);
  return (
    <div className="card-list-container">
      <div className="card-cover">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{type}</p>
      </div>
      <div className="button-more">
        <button>更多</button>
      </div>
    </div>
  );
};

export default Card;

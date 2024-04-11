import React from "react";

const Card = ({ title, type, imageUrl }) => {
  // console.log(title, type, imageUrl);
  return (
    <div className="card-container">
      <div className="card-wrapper">
        <div className="card-cover">
          <img className="card-cover-img" src={imageUrl} alt="" />
        </div>
        <div className="card-content">
          <h2 className="card-content-title">{title}</h2>
          <p className="card-content-type">{type}</p>
        </div>
        {/* <div className="button-more"> */}
        <button className="button-more">更多</button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Card;

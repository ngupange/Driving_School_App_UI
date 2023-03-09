import React from "react";
import "./SessionCard.scss";
import { Link } from "react-router-dom";

const SessionCard = ({ item }) => {
  return (
    <Link to="/session/123" className="link">
      <div className="sessionCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="instructor">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="./images/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./images/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SessionCard;

import React from "react";
import "./SchoolCard.scss";

function SchoolCard({ card }) {
  return (
    <div className="schoolCard">
      <img src={card.img} alt="" />
      <div className="info">
        <img src={card.pp} alt="" />
        <div className="texts">
          <h2>{card.school}</h2>
          <span>{card.instructor}</span>
        </div>
      </div>
    </div>
  );
}

export default SchoolCard;

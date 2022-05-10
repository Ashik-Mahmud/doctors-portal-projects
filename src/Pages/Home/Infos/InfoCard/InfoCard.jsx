import React from "react";

const InfoCard = ({ title, text, image, bgColor }) => {
  return (
    <div class={`card card-side bg-base-100 shadow-xl px-9 ${bgColor}`}>
      <figure>
        <img src={image} alt="Movie" />
      </figure>
      <div class="card-body text-base-100">
        <h2 class="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;

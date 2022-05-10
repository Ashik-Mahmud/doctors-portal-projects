import React from "react";

const TestimonialCard = ({ name, avatar, text, address }) => {
  return (
    <div className="card rounded-lg bg-base-100 shadow-xl border">
      <div className="card-body">
        <p className="text-left leading-snug">{text}</p>{" "}
        <div className="flex gap-4 items-center my-5">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={avatar} alt="avatar" />
            </div>
          </div>
          <div>
            <h4 className="text-base font-medium">{name}</h4>
            <span className="text-sm">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

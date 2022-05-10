import React from "react";
import bgImage from "../../../Assets/images/bg.png";
import heroImage from "../../../Assets/images/chair.png";
const Hero = () => {
  return (
    <div
      className="hero py-40 md:py-64 bg-cover md:bg-contain bg-no-repeat"
      style={{
        background: `url(${bgImage})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img
          src={heroImage}
          className="md:max-w-md rounded-lg shadow-2xl"
          alt="hero"
        />
        <div className="lg:w-3/6 mt-10">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

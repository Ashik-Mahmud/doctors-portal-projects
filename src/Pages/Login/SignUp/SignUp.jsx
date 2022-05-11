import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../../Assets/images/bg.png";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <section
      id="login"
      style={{ background: `url(${bgImage})` }}
      className="grid place-items-center min-h-screen"
    >
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <h3 className="text-lg my-2">Sign Up into Account</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="text"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-accent text-white">Create</button>
          </div>
          <small className="my-2 text-center block">
            Already have an account?{" "}
            <Link
              to="/login"
              className="label-text-alt link link-hover text-secondary"
            >
              Login
            </Link>
          </small>
          <SocialLogin />
        </div>
      </div>
    </section>
  );
};

export default SignUp;

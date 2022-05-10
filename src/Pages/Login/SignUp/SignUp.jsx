import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../../Assets/images/bg.png";

const SignUp = () => {
  return (
    <section
      id="login"
      style={{ background: `url(${bgImage})` }}
      className="grid place-items-center min-h-screen"
    >
      <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <h3 className="text-lg my-2">Sign Up into Account</h3>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="text"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn bg-accent text-white">Create</button>
          </div>
          <small className="my-2 text-center block">
            Already have an account?{" "}
            <Link
              to="/login"
              class="label-text-alt link link-hover text-secondary"
            >
              Login
            </Link>
          </small>
          <div class="divider">OR</div>
          <button className="btn btn-outline">Continue with Google</button>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

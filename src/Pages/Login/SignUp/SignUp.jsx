import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImage from "../../../Assets/images/bg.png";
import auth from "../../../Firebase/Firebase.config";
import useFirebase from "../../../Hooks/useFirebase";
import SocialLogin from "../SocialLogin/SocialLogin";
const SignUp = () => {
  /* If user loggedIn */
  const { isAuth } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, isAuth]);

  /* handle create user  */
  const [loading, setLoading] = useState();
  const handleCreateUser = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!name) return toast.error(`Name field is required.`);
    if (!email) return toast.error(`Email field is required.`);
    if (!password) return toast.error(`Password field is required.`);
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name }).then(() => {
          toast.success(`User creating successfully done & SignInned.`);
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message.split(":")[1]);
      });
  };

  return (
    <section
      id="login"
      style={{ background: `url(${bgImage})` }}
      className="grid place-items-center min-h-screen"
    >
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleCreateUser} className="card-body">
          <h3 className="text-lg my-2">Sign Up into Account</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
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
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-accent text-white">
              {loading ? "Creating..." : "Create"}
            </button>
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
        </form>
      </div>
    </section>
  );
};

export default SignUp;

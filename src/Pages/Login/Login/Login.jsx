import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImage from "../../../Assets/images/bg.png";
import auth from "../../../Firebase/Firebase.config";
import Token from "../../../Helpers/Token";
import useFirebase from "../../../Hooks/useFirebase";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
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

  /* States  */
  const [isReset, setIsReset] = useState(false);

  /* Handle login system  */
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!email) return toast.error(`Email field is required.`);
    if (!isReset) {
      if (!password) return toast.error(`Password field is required.`);
    }
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success(`SignIn successfully done.`);
        Token(auth?.currentUser?.uid);
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  /* Handle Reset Password  */
  const handleResetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (!email) return toast.error(`Email field is required.`);
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`We sent you email reset link on your email ${email}`);
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  return (
    <section
      id="login"
      style={{ background: `url(${bgImage})` }}
      className="grid place-items-center min-h-screen"
    >
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <form
          onSubmit={isReset ? handleResetPassword : handleLogin}
          className="card-body"
        >
          <h3 className="text-lg my-2">
            {isReset ? "Reset Password" : "Login into Account"}
          </h3>
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
            {!isReset && (
              <>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </>
            )}

            <label className="label">
              <span
                onClick={() => setIsReset((prevState) => !prevState)}
                type="button"
                className="label-text-alt link link-hover"
              >
                {isReset ? " Go Back?" : " Forgot password?"}
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            {isReset ? (
              <button className="btn bg-accent text-white">
                Reset Password
              </button>
            ) : (
              <button className="btn bg-accent text-white">Login</button>
            )}
          </div>
          <small className="my-2 text-center block">
            New to doctorPara?{" "}
            <Link
              to="/sign-up"
              className="label-text-alt link link-hover text-secondary"
            >
              Create an account
            </Link>
          </small>
          <SocialLogin />
        </form>
      </div>
    </section>
  );
};

export default Login;

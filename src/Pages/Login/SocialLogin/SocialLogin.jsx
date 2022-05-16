import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import useFirebase from "../../../Hooks/useFirebase";

const SocialLogin = () => {
  const { socialProviderLogin } = useFirebase();
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    socialProviderLogin(provider);
  };

  return (
    <>
      <div className="divider">OR</div>
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="btn btn-outline"
      >
        Continue with Google
      </button>
    </>
  );
};

export default SocialLogin;

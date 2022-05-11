import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import Token from "../Helpers/Token";
import auth from "./../Firebase/Firebase.config";
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const socialProviderLogin = async (provider) => {
    await signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(true);
        Token(auth?.currentUser?.uid);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  /* set auth */
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user?.uid) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  return { socialProviderLogin, loading, user, isAuth };
};

export default useFirebase;

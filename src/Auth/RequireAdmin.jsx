import { signOut } from "firebase/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import useAdmin from "../Hooks/useAdmin";
import auth from "./../Firebase/Firebase.config";
const RequireAdmin = ({ children }) => {
  const [isAdmin, adminLoading] = useAdmin(auth?.currentUser);
  const location = useLocation();
  if (!adminLoading) {
    return <Loader />;
  }
  if (isAdmin === false) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;

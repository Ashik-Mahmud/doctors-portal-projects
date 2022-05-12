import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import auth from "../../Firebase/Firebase.config";

const Header = () => {
  const { isAuth, user } = useContext(AuthContext);
  const navigate = useNavigate();
  /* handle Log out  */
  const handleLogOut = async () => {
    await signOut(auth).then((res) => {
      toast.success(`Sign Out successfully done.`);
      navigate("/login");
    });
  };

  /* Navbar menus */
  const NavbarMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointments">Appointments</Link>
      </li>

      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      {isAuth && (
        <li>
          <Link to="/my-appointments">My Appointments</Link>
        </li>
      )}

      <li tabIndex="0">
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <header className=" py-3 absolute w-full">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavbarMenu}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Doctors <span className="text-primary"> Para</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{NavbarMenu}</ul>
        </div>
        <div className="navbar-end">
          {isAuth ? (
            <>
              <div className="flex items-center gap-3 mr-5">
                {auth?.currentUser?.photoURL ? (
                  <div className="avatar online">
                    <div className="w-11 rounded-full border">
                      <img src={user?.photoURL} alt={user?.displayName} />
                    </div>
                  </div>
                ) : (
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                      <span>
                        {user?.displayName
                          ? user?.displayName?.slice(0, 1)
                          : "N"}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col ">
                  <span>
                    {user?.displayName ? user?.displayName : "Not available"}
                  </span>
                  <small className="text-slate-500">{user?.email}</small>
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-red-400 text-white"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

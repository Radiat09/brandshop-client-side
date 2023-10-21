import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextData } from "../AuthProvider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(ContextData);
  const navLinks = (
    <>
      <li className="md:hidden ">
        <NavLink
          className={`${user ? "hidden" : "block"} btn-sm rounded-none mb-1`}
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li className="md:hidden ">
        <NavLink
          className={`${
            user ? "hidden" : "block"
          } btn-sm rounded-none mb-1 lg:mb-0`}
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li className=" btn-sm rounded-none mb-1 lg:mb-0 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className=" btn-sm rounded-none mb-1 lg:mb-0  ">
        <NavLink className="whitespace-nowrap" to="/addProduct">
          Add Product
        </NavLink>
      </li>
      <li className=" btn-sm rounded-none mb-1 lg:mb-0 ">
        <NavLink className="whitespace-nowrap" to={`/myCart/${user?.email}`}>
          My Cart
        </NavLink>
      </li>
      <li className=" btn-sm rounded-none ">
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  const darkMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
  };
  const lightMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) darkMode();
    else lightMode();
  };

  const handleLogOut = () => {
    logout()
      .then(() => {
        // Sign-out successful.
        toast.success("Logged Out Successfully!");
      })
      .catch((err) => {
        // An error happened.
        toast.error(`${err.message}`);
      });
  };
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2 py-4 bg-base-100 max-w-7xl mx-auto">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  font-semibold"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink className="text-3xl font-black mr-10">
          TecH<span className="text-red-600">BranD</span>
        </NavLink>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navLinks}
          </ul>
        </div>
        {/* Navbar end */}
        <div className=" flex gap-2 items-center mt-4 md:mt-0">
          {/* <input
            type="checkbox"
            onChange={toggleTheme}
            className="toggle toggle-sm mr-2"
          /> */}
          <label className="swap swap-rotate mr-2">
            {/* this hidden checkbox controls the state */}
            <input onChange={toggleTheme} type="checkbox" />

            {/* sun icon */}
            <svg
              className="swap-off fill-current w-8 h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on fill-current w-8 h-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user ? (
            <div className="cursor-pointer">
              <div className="dropdown dropdown-bottom dropdown-end relative">
                <div tabIndex={0} className="avatar m-1">
                  <div className="w-9 rounded-full ring  ring-offset-red-500 ring-offset-4">
                    {user.photoURL ? (
                      <img src={user?.photoURL} />
                    ) : (
                      <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  w-24"
                >
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <details className="dropdown hidden md:block">
              <summary className="m-1 btn rounded-none">My Account</summary>
              <ul className="mt-1 shadow menu dropdown-content z-[1] bg-base-100 rounded-none">
                <li className="">
                  <NavLink className="btn btn-sm rounded-none mb-1" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className="btn btn-sm rounded-none" to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            </details>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextData } from "../AuthProvider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(ContextData);
  const navLinks = (
    <>
      <li className="md:hidden">
        <NavLink
          className={`${user ? "hidden" : "block"} btn-sm rounded-none mb-1`}
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li className="md:hidden">
        <NavLink
          className={`${
            user ? "hidden" : "block"
          } btn-sm rounded-none mb-1 lg:mb-0`}
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li className=" btn-sm rounded-none mb-1 lg:mb-0">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className=" btn-sm rounded-none mb-1 lg:mb-0 ">
        <NavLink className="whitespace-nowrap" to="/addProduct">
          Add Product
        </NavLink>
      </li>
      <li className=" btn-sm rounded-none mb-1 lg:mb-0">
        <NavLink className="whitespace-nowrap" to="/myCart">
          My Cart
        </NavLink>
      </li>
      <li className=" btn-sm rounded-none">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
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
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {/* Navbar end */}
        <div className=" flex gap-2 items-center mt-4 md:mt-0">
          <input
            type="checkbox"
            onChange={toggleTheme}
            className="toggle toggle-sm mr-2"
          />

          {user ? (
            <div className="cursor-pointer">
              <div className="dropdown dropdown-bottom dropdown-end relative">
                <div tabIndex={0} className="avatar m-1">
                  <div className="w-9 rounded-full ring ring-secondary ring-offset-pink-500 ring-offset-2">
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

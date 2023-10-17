import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="md:hidden">
        <NavLink className="btn btn-sm rounded-none mb-1" to="/login">
          Login
        </NavLink>
      </li>
      <li className="md:hidden">
        <NavLink className="btn btn-sm rounded-none mb-1" to="/register">
          Register
        </NavLink>
      </li>
      <li className="btn btn-sm rounded-none mb-1">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="btn btn-sm rounded-none">
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

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2 bg-base-100 max-w-7xl mx-auto">
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
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* Navbar end */}
      <div className=" flex gap-2 items-center mt-4 md:mt-0">
        <input
          type="checkbox"
          onChange={toggleTheme}
          className="toggle toggle-sm"
        />
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
      </div>
    </div>
  );
};

export default Navbar;

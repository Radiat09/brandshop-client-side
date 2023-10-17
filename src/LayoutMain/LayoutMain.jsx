import { Outlet } from "react-router-dom";

const LayoutMain = () => {
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
    <div>
      <div className="flex justify-center items-center">
        <input type="checkbox" onChange={toggleTheme} className="toggle" />
      </div>
      <h1 className="text-5xl text-center">Main Layout</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutMain;

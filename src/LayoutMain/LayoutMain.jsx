import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutMain = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutMain;

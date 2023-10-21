import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutMain = () => {
  return (
    <div>
      <Navbar></Navbar>
      <footer className="footer footer-center py-4 bg-base-300 text-base-content">
        <aside>
          <p className="font-bold text-red-500">
            The website is on free hosting.
          </p>
        </aside>
      </footer>
      <div className="min-h-[70vh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LayoutMain;

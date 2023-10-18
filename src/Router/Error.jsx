import { FaArrowLeft } from "react-icons/fa";
import error from "../assets/error.png";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="mt-32 shadow-2xl shadow-pink-600">
      <h1 className="text-5xl font-black text-center ">Page not Found</h1>
      <div className="flex justify-center mt-10">
        <img src={error} alt="" />
      </div>
      <div className="flex justify-center mt-5">
        <Link to="/">
          <button className="flex items-center justify-center gap-2 btn glass">
            <FaArrowLeft></FaArrowLeft>Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;

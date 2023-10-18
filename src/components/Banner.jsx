import { BsArrowBarDown } from "react-icons/bs";
import heroBg from "../assets/banner-bg.jpg";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto my-28">
      <div
        className="hero "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to TecH<span className="text-red-600">BranD</span>!
            </h1>
            <p className="mb-5">
              We are a premier Tech. review and information website that caters
              to the needs of Tech. enthusiasts. Our website provides detailed
              and up-to-date information about various Technology, their
              features, specifications, prices, and user reviews.
            </p>
            <a href="#featured_brands">
              <button className="btn bg-orange-500 text-white flex justify-center items-center mx-auto">
                Stay tune with Branded porducts{" "}
                <BsArrowBarDown className="text-xl"></BsArrowBarDown>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleBrandCard = ({ product }) => {
  const { _id, brandName, name, photo, price } = product;
  // console.log(typeof rating);

  return (
    <div className="card  flex gap-3 border dark:border-none shadow py-5">
      <figure className="flex-1">
        <img className="w-56" src={photo} alt={`image of ${name}`} />
      </figure>
      <div className="flex flex-col gap-2">
        <div className="w-1/2 mx-auto my-3">
          <p className="flex items-center gap-1">
            <span className="card-title">Brand: </span> <span>{brandName}</span>
          </p>
          <h2 className="flex items-center gap-1">
            <span className="card-title">Name:</span>
            <span>{name}</span>
          </h2>
          <p className="flex items-center items-center">
            <span className="card-title">Ratings: </span>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </p>
          <p className="flex items-center gap-1">
            <span className="card-title">Price:</span>
            <span> {price}$</span>
          </p>
        </div>
        <div className="card-actions justify-center">
          <Link to={`/productDetails/${_id}`}>
            <button className="btn bg-orange-500 text-white btn-sm hover:text-orange-500 hover:bg-white">
              Details
            </button>
          </Link>
          <button className="btn bg-orange-500 text-white btn-sm hover:text-orange-500 hover:bg-white">
            update
          </button>
        </div>
      </div>
    </div>
  );
};

SingleBrandCard.propTypes = {
  product: PropTypes.object,
};
export default SingleBrandCard;

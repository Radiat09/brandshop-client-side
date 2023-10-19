import PropTypes from "prop-types";

const CartCard = ({ product }) => {
  const { name, photo, brandName, price } = product;
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

          <p className="flex items-center gap-1">
            <span className="card-title">Price:</span>
            <span> {price}$</span>
          </p>
        </div>
        <div className="card-actions justify-center">
          <button className="btn bg-orange-500 text-white btn-sm hover:text-orange-500 hover:bg-white">
            Buy Now
          </button>
          <button className="btn bg-orange-500 text-white btn-sm hover:text-orange-500 hover:bg-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  product: PropTypes.object,
};

export default CartCard;

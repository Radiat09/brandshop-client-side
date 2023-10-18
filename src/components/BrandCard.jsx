import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={brand?.logo}
          alt={`logo of ${brand?.name}`}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{brand?.name}</h2>
      </div>
    </div>
  );
};
BrandCard.propTypes = {
  brand: PropTypes.object,
};
export default BrandCard;

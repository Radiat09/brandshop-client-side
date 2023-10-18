import BrandCard from "../../components/BrandCard";
import PropTypes from "prop-types";

const FeaturedBrands = ({ brands }) => {
  return (
    <div id="featured_brands" className="max-w-7xl mx-auto my-40">
      <h2 className="text-4xl font-bold text-center mb-8">Featured Brands</h2>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
        {brands?.map((brand) => (
          <BrandCard key={brand.id} brand={brand}></BrandCard>
        ))}
      </div>
    </div>
  );
};
FeaturedBrands.propTypes = {
  brands: PropTypes.array,
};
export default FeaturedBrands;

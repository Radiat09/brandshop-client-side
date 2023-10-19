import { useParams } from "react-router-dom";
import Slider from "../../components/Slider";
import { useEffect, useState } from "react";
import SingleBrandCard from "./SingleBrandCard";

const SingleBrand = () => {
  const { brand } = useParams();
  const lowBrand = brand.toLowerCase();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/products/${lowBrand}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [lowBrand]);

  console.log(brand);

  console.log(products);
  return (
    <div className="mb-40 mt-10">
      <Slider></Slider>
      <div className="mb-40">
        {products.length === 0 ? (
          <h2 className="text-5xl text-center">No Data Found</h2>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
            {products?.map((product) => (
              <SingleBrandCard
                key={product?._id}
                product={product}
              ></SingleBrandCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBrand;

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const brandProducts = useLoaderData();

  useEffect(() => {
    const singleProduct = brandProducts?.find(
      (singProduct) => singProduct._id === id
    );
    setProduct(singleProduct);
  }, [brandProducts, id]);
  console.log(product);
  return (
    <div>
      <h1 className="text-5xl text-center my-5">
        {product?.name.toUpperCase()}
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 p-2">
        <div className="flex-1">
          <img
            className="rounded-sm"
            src={product?.photo}
            alt={`image of ${product?.name}`}
          />
        </div>
        <div className="flex-1">
          <div className="mb-3">
            <p className="flex items-center gap-1">
              <span className="card-title">Brand: </span>{" "}
              <span>{product?.brandName?.toUpperCase()}</span>
            </p>
            <h2 className="flex items-center gap-1">
              <span className="card-title">Name:</span>
              <span>{product?.name?.toUpperCase()}</span>
            </h2>
            <div className="flex gap-1 items-center ">
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
            </div>
            <p className="flex items-center gap-1">
              <span className="card-title">Price:</span>
              <span> {product?.price}$</span>
            </p>
            <p className="flex items-center gap-1">
              <span className="card-title">Type:</span>
              <span> {product?.type}</span>
            </p>
          </div>
          <p className="flex flex-col gap-1">
            <span className="card-title underline whitespace-nowrap">
              Short Description:
            </span>
            <span className="lg:ml-4"> {product?.short_description}</span>
          </p>
          <div className="flex mt-8">
            <button className="btn  bg-orange-500  text-white hover:text-orange-500 hover:bg-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

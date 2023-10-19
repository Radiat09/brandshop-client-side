import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { useEffect, useState } from "react";

const MyCart = () => {
  const [total, setTotal] = useState(0);
  const cart = useLoaderData();

  useEffect(() => {
    let count = 0;
    cart?.map((product) => {
      count = count + parseInt(product?.price);
    });
    setTotal(count);
  }, [cart]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      {cart.length ? (
        <div>
          <h2 className="text-4xl text-center mb-3">
            Your Items: {cart.length}
          </h2>
          <p className="text-2xl text-center">Total: {total}$</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
            {cart?.map((product) => (
              <CartCard key={product?._id} product={product}></CartCard>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="text-4xl text-center my-auto">Items not Added yet!</h1>
      )}
    </div>
  );
};

export default MyCart;

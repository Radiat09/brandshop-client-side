import Swal from "sweetalert2";

const UpdateProduct = () => {
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const uName = form.brandName.value;
    const brandName = uName.toLowerCase();
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const short_description = form.short_description.value;
    const photo = form.photo.value;

    const newProduct = {
      name,
      brandName,
      type,
      price,
      rating,
      short_description,
      photo,
    };
    console.log(newProduct);

    // Send data to server
    fetch("http://localhost:9000/products", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product added successfully!",
            icon: "success",
            confirmButtonText: "Cool?",
          });
        }
        console.log(data);
      });
  };
  return (
    <div className="min-h-[70vh] max-w-7xl mx-auto my-40">
      <div className="bg-[#F4F3F0] rounded py-20 px-1 md:px-10 lg:px-32">
        <h2 className=" text-5xl font-bold text-center mb-10">
          Update Product
        </h2>
        <div>
          <form onSubmit={handleUpdateProduct} className="">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 space-y-5">
                <div className="">
                  <label className="label ">
                    <span className="label-text text-xl font-semibold">
                      Product Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter product name"
                    name="name"
                    className="w-full  p-3 rounded-md"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Brand name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter brand name"
                    name="brandName"
                    className="w-full p-3 rounded-md"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Product type
                    </span>
                  </label>
                  <select
                    name="type"
                    className="select select-bordered w-full p-3 border-none "
                  >
                    <option>Mobile</option>
                    <option>Accessories</option>
                    <option>Gadgets</option>
                    <option>Desktop</option>
                    <option>Laptop</option>
                    <option>PC parts</option>
                  </select>
                </div>
              </div>
              <div className="flex-1  space-y-5">
                <div className="">
                  <label className="label ">
                    <span className="label-text text-xl font-semibold">
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter product price"
                    name="price"
                    className="w-full  p-1 md:p-3 rounded-md"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Product Rating
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter product rating"
                    name="rating"
                    className="w-full p-1 md:p-3 rounded-md"
                    required
                  />
                </div>
                <div className="">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">
                      Short description
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter short description"
                    name="short_description"
                    className="w-full  p-1 md:p-3 rounded-md"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="mb-10">
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Product Photo
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter product photo URL"
                  name="photo"
                  className="w-full  p-3 rounded-md"
                />
              </div>
              <input
                type="submit"
                value="Update Product"
                className="w-full border-2  bg-orange-500 text-white py-3  text-2xl font-fontRancho rounded-md cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;

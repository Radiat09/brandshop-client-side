import apple from "../../assets/images/vendor-apple-500.png";
import dell from "../../assets/images/vendor-dell-500.png";
import lenovo from "../../assets/images/vendor-lenovo-500.png";
import microsoft from "../../assets/images/vendor-microsoft-500.png";
import beats from "../../assets/images/vendor-beats-500.png";
import safeware from "../../assets/images/vendor-safeware-500.png";
const OurSupplier = () => {
  return (
    <div className="my-10">
      <h3 className="text-3xl font-bold text-center">Our Suppliers</h3>
      <div className="flex flex-wrap justify-center ">
        <img className="w-48" src={apple} alt="logo of apple" />
        <img className="w-48" src={dell} alt="logo of dell" />
        <img className="w-48" src={lenovo} alt="logo of dell" />
        <img className="w-48" src={microsoft} alt="logo of dell" />
        <img className="w-48" src={beats} alt="logo of dell" />
        <img className="w-48" src={safeware} alt="logo of dell" />
      </div>
    </div>
  );
};

export default OurSupplier;

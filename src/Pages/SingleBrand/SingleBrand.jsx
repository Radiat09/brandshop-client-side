import { useParams } from "react-router-dom";
import Slider from "../../components/Slider";

const SingleBrand = () => {
  const { brand } = useParams();
  // console.log(brand);
  return (
    <div className="mb-40 mt-10">
      <Slider></Slider>
      <h1 className="text-5xl text-center">Single Brand of {brand}</h1>
    </div>
  );
};

export default SingleBrand;

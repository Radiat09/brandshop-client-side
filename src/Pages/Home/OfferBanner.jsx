import intel from "../../assets/images/11th-gen-intel-min.png";
import bestPrice from "../../assets/images/tl12-corsair-home-banner.png";
const OfferBanner = () => {
  return (
    <div className="max-w-7xl mx-auto my-40">
      <div className="flex flex-col xl:flex-row mx-2 gap-5">
        <img src={intel} alt="" />
        <img src={bestPrice} alt="" />
      </div>
    </div>
  );
};

export default OfferBanner;

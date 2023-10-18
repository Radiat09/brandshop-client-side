import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import FeaturedBrands from "./FeaturedBrands";
import OurSupplier from "./OurSupplier";
import OfferBanner from "./offerBanner";
import FeaturedCategory from "./FeaturedCategory";

const Home = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  console.log(brands);
  return (
    <div>
      <Banner></Banner>
      <OurSupplier></OurSupplier>
      <FeaturedCategory></FeaturedCategory>
      <FeaturedBrands brands={brands}></FeaturedBrands>
      <OfferBanner></OfferBanner>
    </div>
  );
};

export default Home;

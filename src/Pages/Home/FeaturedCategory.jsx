import smartPhone from "../../assets/images/category/mobile-65x65.webp";
import laptop from "../../assets/images/category/laptop-65x65.webp";
import service from "../../assets/images/category/service-65x65.webp";
import desktop from "../../assets/images/category/desktop-11-65x65.webp";
import processor from "../../assets/images/category/cpu-65x65.webp";
import motherbooard from "../../assets/images/category/mobo-65x65.webp";
import ssd from "../../assets/images/category/ssd-65x65.webp";
import graphicsCard from "../../assets/images/category/gpu-65x65.webp";
import keyboard from "../../assets/images/category/keyboard-65x65.webp";
import ram from "../../assets/images/category/ram-65x65.webp";
import router from "../../assets/images/category/router-65x65.webp";
import monitor from "../../assets/images/category/monitor-65x65.webp";
import gamingChair from "../../assets/images/category/gaming-chair-65x65.webp";
import cpuCooler from "../../assets/images/category/cooler-65x65.webp";
import pcCase from "../../assets/images/category/case-65x65.webp";
import powerSupply from "../../assets/images/category/psu-65x65.webp";
import { Link } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";
const FeaturedCategory = () => {
  return (
    <div className="my-40 max-w-7xl mx-auto ">
      <div className="flex justify-between items-center border border-l-0 shadow-sm mb-5">
        <div className="border-l-8  border-orange-500">
          <h5 className="text-xl font-medium ml-4">Featured Category</h5>
          <p className="ml-4">Select your Category</p>
        </div>
        <div>
          <Link className="rounded-full bg-orange-500 py-1 px-2 text-sm flex md:gap-1 justify-center items-center text-white pr-4 text-center">
            Show all Category
            <BsArrowBarRight></BsArrowBarRight>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 dark:text-black mx-auto place-items-center">
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={smartPhone} alt="" />
          <p>Smartphone</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={laptop} alt="" />
          <p>Laptop</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={service} alt="" />
          <p>Service</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={desktop} alt="" />
          <p>Desktop</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={processor} alt="" />
          <p>Processor</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={motherbooard} alt="" />
          <p>MotherBoard</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={ssd} alt="" />
          <p>SSD</p>
        </div>
        <div className="flex flex-col items-center gap-1 whitespace-nowrap justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={graphicsCard} alt="" />
          <p>Graphics Card</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={keyboard} alt="" />
          <p>Keyboard</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={ram} alt="" />
          <p>RAM</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={router} alt="" />
          <p>Router</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={monitor} alt="" />
          <p>Monitor</p>
        </div>
        <div className="flex flex-col items-center gap-1 whitespace-nowrap justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={gamingChair} alt="" />
          <p>Gaming Chair</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={cpuCooler} alt="" />
          <p>Cooler</p>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={pcCase} alt="" />
          <p>Case</p>
        </div>
        <div className="flex flex-col items-center gap-1 whitespace-nowrap justify-center p-8 rounded-md shadow-sm border bg-white w-36">
          <img src={powerSupply} alt="" />
          <p>Power Supply</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategory;

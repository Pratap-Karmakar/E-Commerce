import Image from "next/image";
import React from "react";
import delivery from "../public/gifs/delivery.gif";
import { BsFillLaptopFill, BsSmartwatch } from "react-icons/bs";
import { GiSofa, GiWrappedSweet } from "react-icons/gi";
import {
  FaMobile,
  FaTshirt,
  FaBicycle,
  FaHeadphones,
  FaAngleLeft,
  FaAngleRight,
  FaGamepad,
} from "react-icons/fa";
import { v4 } from "uuid";
import Link from "next/link";

const page = () => {
  let componets = [
    {
      icon: <BsFillLaptopFill key={v4()} />,
      category: "laptop",
    },
    {
      icon: <GiSofa key={v4()} />,
      category: "sofa",
    },
    {
      icon: <FaMobile key={v4()} />,
      category: "phone",
    },
    {
      icon: <FaTshirt key={v4()} />,
      category: "tshirt",
    },
    {
      icon: <FaBicycle key={v4()} />,
      category: "cycle",
    },
    {
      icon: <FaHeadphones key={v4()} />,
      category: "",
    },
    {
      icon: <BsSmartwatch key={v4()} />,
      category: "watch",
    },
    {
      icon: <GiWrappedSweet key={v4()} />,
      category: "sweet",
    },
    {
      icon: <FaGamepad key={v4()} />,
      category: "game",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <div className="w-full md:h-[40vh] magic-gradient rounded-xl shadow-md flex justify-between items-center p-5 overflow-hidden shadow-gray-300">
        <div className="text-white text-center md:text-left justify-center w-full md:pl-8 p-5">
          <h1 className="uppercasece text-2xl md:text-4xl font-bold">
            Free Delivery
          </h1>
          <p className="text-xl py-3 text-gray-200">
            Don&#39;t miss it out! Only today, get free Next Day Delivery on all
            your orders.
          </p>
          <div className="md:pt-2 pt-6">
            <button className="px-4 py-2 bg-white text-black rounded-md capitalize hover:bg-[#240977] hover:text-white">
              Browse Products
            </button>
          </div>
        </div>
        <div className="pl-5 md:flex items-center justify-center hidden">
          <Image src={delivery} alt="delivery logo" />
        </div>
      </div>
      <div>
        <h1 className="text-center text-xl font-bold py-5">
          Popular Categories ✨
        </h1>
        <div className="w-full flex justify-center items-center flex-wrap">
          {componets.map((item) => {
            return (
              <Link href={`/category/${item.category}`}>
                <button className="text-4xl border bg-white shadow-md p-4 rounded-xl hover:scale-90 transition-transform m-4">
                  {item.icon}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;

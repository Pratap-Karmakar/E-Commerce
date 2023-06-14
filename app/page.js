"use client";

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
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      onClick={onClick}
      className="slick-arrow absolute p-0 top-[30%]  h-[800px] z-[50] right-0 cursor-pointer md:text-xl"
      style={{ ...style, display: "block", color: "black" }}
    >
      <FaAngleRight />
      {/* <div className="bg-red-700 p-5"></div> */}
    </span>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      onClick={onClick}
      className="slick-arrow absolute p-0 top-[30%] h-[800px] z-[50] left-0  cursor-pointer md:text-xl"
      style={{ ...style, display: "block", color: "black" }}
    >
      <FaAngleLeft />
      {/* <div className="bg-red-700 p-5"></div> */}
    </span>
  );
}

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-x-hidden -pl-8">
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
                <button className="text-4xl border bg-white shadow-md p-4 rounded-xl hover:scale-90 transition-transform m-3">
                  {item.icon}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      
      <div className="">
        <h1 className="flex justify-center my-16">Hot Deals 🔥</h1>
        <div className="w-[900px] px-10">
          <div className=" text-center ml-4">
            <Slider {...settings} className="text-3xl">
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
              <h1>Hello</h1>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

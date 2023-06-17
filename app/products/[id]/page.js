// this page will take us to a singhe product details while clicking on that product

import Image from "next/image";
import React from "react";

const getProduct = async (id) => {
  const data = await fetch(
    `https://www.screentechnicals.com/api/ecommerce/products//${id}`,
    { next: { revalidate: 10 } }
  );
  return data.json();
};

const Page = async ({ params }) => {
  const { id } = params;
  const data = await getProduct(id);

  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="lg:w-[50%] w-full">
        <Image
          src={data?.[0]?.image}
          alt=""
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div className=" lg:w-[95%] lg:ml-10 w-full pt-10 lg:pt-0">
        <h2 className="text-xl tracking-widest uppercase text-[#ff9900]">
          {data?.[0]?.brand}
        </h2>
        <h2 className="text-2xl font-bold">{data?.[0]?.name}</h2>
        <h2 className="text-xl font-semibold pb-5">Rs. {data?.[0]?.price}</h2>
        <h2 className="text-sm tracking-wide text-gray-800">
          {data?.[0]?.description}
        </h2>
        <div className="flex items-center space-x-4 pt-6 pb-10">
          <button className="text-gray-800 bg-gradient-to-b font-serif from-[#ffd900] to-[#ffb300] px-4 py-1 text-xl rounded-md">
            By Now
          </button>
          <button className="text-gray-800 font-serif bg-gradient-to-b from-[#ffd900] to-[#ffb300] px-4 py-1 text-xl rounded-md">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Page;

import React from "react";
import Card from "../components/Card";
import Link from "next/link";

const getProducts = async () => {
  const data = await fetch(
    `https://www.screentechnicals.com/api/ecommerce/products`,
    { next: { revalidate: 10 } }
  );
  return data.json();
};

const page = async () => {
  const products = await getProducts();

  return (
    <div className=" w-full flex justify-center items-center flex-wrap">
      {products.map((item) => {
        return (
          <Link href={`/products/${item.id}`} key={item.id}>
            <Card image={item.image} price={item.price} name={item.name} />
          </Link>
        );
      })}
    </div>
  );
};

export default page;

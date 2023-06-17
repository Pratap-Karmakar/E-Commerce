import Card from "@/app/components/Card";
import React from "react";

const getProducts = async () => {
  const data = await fetch(
    `https://www.screentechnicals.com/api/ecommerce/products`,
    { next: { revalidate: 10 } }
  );
  return data.json();
};

const page = async ({ params }) => {
  const { search } = params;

  const products = await getProducts();

  return (
    <div className=" w-full flex justify-center items-center flex-wrap">
      {products.map((item) => {
        if (
          item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase())
        ) {
          return (
            <Card
              key={item.id}
              image={item.image}
              price={item.price}
              name={item.name}
            />
          );
        }
      })}
    </div>
  );
};

export default page;

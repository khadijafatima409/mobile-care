import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="pt-16 pb-12 gap-12 flex flex-col ">
      <div className="flex gap-4 font-MC">
        <Image src="/icons/star.svg" height="32" width="32" alt="Star" />
        <h1 className="font-bold text-large leading-[120%]">
          Mohlo by vás zaujímať
        </h1>
      </div>
      {/* slider  */}

      <div className=" w-full overflow-hidden">
        <ProductCard />
      </div>
    </div>
  );
};

export default Product;

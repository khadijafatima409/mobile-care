import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="pt-16 pb-12 gap-12 flex flex-col pl-12 ">
      <div className="flex gap-4 font-MC">
        <Image src="/icons/star.svg" height="32" width="32" alt="Star" />
        <h1 className="font-bold text-large leading-[120%]">
          Mohlo by vás zaujímať
        </h1>
      </div>
      {/* slider  */}

      <div className="w-full">
        <ProductCard />
        <div className="flex justify-end items-end">
          <div className="border-2 p-3 mt-12 mr-12">
            <Image
              src={"/icons/arrow-right.svg"}
              alt="right-arrow"
              height={24}
              width={24}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

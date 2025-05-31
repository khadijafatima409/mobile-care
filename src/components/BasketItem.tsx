import Image from "next/image";
import React from "react";
import Custombtn from "./Custombtn";
import CustomSelect from "./CustomeSelect";

interface BasketItemProps {
  imageSrc: string;
  title: string;
  details: string;
  price: string;
  oldPrice: string;
  discountNote: string;
}

const BasketItem = ({
  imageSrc,
  title,
  details,
  price,
  oldPrice,
  discountNote,
}: BasketItemProps) => {
  return (
    <div className=" border-b-2 border-white-smoke">
      <div className="pb-4 flex  justify-between ">
        <div className="flex gap-5">
          <Image src={imageSrc} alt={title} height="128" width="104" />
          <div className="flex justify-between flex-col">
            <div className="font-inter">
              <h3 className="font-semibold text-lg ">{title}</h3>
              <p className="text-grey-light text-base font-medium">{details}</p>
            </div>
            <Custombtn
              label="Odložiť na neskôr"
              iconSrc="/basket/black-heart.svg"
              className="border-2 font-bold  hover:bg-purple-1 hover:text-white"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <div className="flex justify-end gap-4">
              <p className="text-secondory-red text-lg font-bold font-inter">
                {price}
                <span className="text-grey-light font-medium text-base">
                  {oldPrice}
                </span>
              </p>
              <Image
                src={"/icons/delete.svg"}
                height={24}
                width={24}
                alt="delete"
                className="cursor-pointer"
              />
            </div>
            <p className="text-secondory-red text-xs font-medium font-inter pt-2">
              {discountNote}
            </p>
          </div>
          <div>
            <h2 className="font-medium text-xs font-inter pb-2 ">
              Zadajte množstvo tu
            </h2>
            <CustomSelect
              defaultSelected="1"
              items={["1", "2", "3", "4", "5"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;

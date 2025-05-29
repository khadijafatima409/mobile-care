import Image from "next/image";
import React from "react";
import Custombtn from "./Custombtn";
import CustomSelect from "./CustomeSelect";

const Basket = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-12 gap-2">
        <h2 className="font-bold text-2xl">Váš košík</h2>
        <p className="font-medium text-lg">V košíku máte aktuálne 2 produkty</p>
      </div>
      <div>
        <div className="border w-2/4">
          <div className="flex border-green-950">
            <div>
              <Image
                src="/basket/iphone14.svg"
                alt="Iphone 14"
                height="128"
                width="104"
              />
            </div>
            <div>
              <div>
                <h3>iPhone 14</h3>
                <p>Kapacita: 256 GB, Farba: Silver</p>
              </div>
              <Custombtn
                label="Odložiť na neskôr"
                iconSrc="/basket/black-heart.svg"
                className="border-2 font-bold  hover:bg-purple-1 hover:text-white"
              />
            </div>
            <div>
              <div>
                <div className="flex">
                  <p>1299 € 1799 €</p>
                  <Image
                    src={"/icons/delete.svg"}
                    height={24}
                    width={24}
                    alt="delete"
                  />
                </div>
                <p>Uštríte 17% oproti pôvodnej sume</p>
              </div>
              <div>
                <h2>Zadajte množstvo tu</h2>
                <CustomSelect
                  defaultSelected="1"
                  items={["1", "2", "3", "4", "5"]}
                />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Basket;

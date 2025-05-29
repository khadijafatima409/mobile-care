import React from "react";

import BasketItem from "./BasketItem";

const Basket = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-12 gap-2">
        <h2 className="font-bold text-2xl">Váš košík</h2>
        <p className="font-medium text-lg">V košíku máte aktuálne 2 produkty</p>
      </div>
      <div>
        <div className="border w-2/4 flex flex-col gap-8">
          {basketItems.map((item, index) => (
            <BasketItem key={index} {...item} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Basket;
const basketItems = [
  {
    imageSrc: "/basket/iphone14.svg",
    title: "iPhone 14",
    details: "Kapacita: 256 GB, Farba: Silver",
    price: "1299 €",
    oldPrice: "1799 €",
    discountNote: "Uštríte 17% oproti pôvodnej sume",
  },
  {
    imageSrc: "/basket/iphone-pro.svg",
    title: "iPhone 14 Pro",
    details: "Kapacita: 256 GB, Farba: Silver",
    price: "1499 €",
    oldPrice: "1999 €",
    discountNote: "Uštríte 20% oproti pôvodnej sume",
  },
  {
    imageSrc: "/basket/airpods.svg",
    title: "Apple AirPods 2 GEN",
    details: "Kapacita: 256 GB, Farba: Silver",
    price: "1199 €",
    oldPrice: "1599 €",
    discountNote: "Uštríte 15% oproti pôvodnej sume",
  },
];

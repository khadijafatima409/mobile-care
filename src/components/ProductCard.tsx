import Image from "next/image";

import ColorDot from "./ColorDot";
import ExpandableButton from "./ExpandableBtn";

const ProductCard = () => {
  return (
    <div className=" w-full overflow-hidden  ">
      <div className=" flex gap-6 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className=" w-[23%] flex flex-col gap-4 shrink-0 group"
          >
            {/* Card Head */}
            <div className=" relative h-[312px] w-full overflow-hidden">
              <Image
                src={card.image}
                alt="product"
                fill
                className="object-contain transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* Hover Image */}
              <Image
                src={card.hoverImage}
                alt="hover-product"
                fill
                className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Tag */}
              {index < 2 && (
                <div className="bg-secondory-yellow py-1 px-2 absolute top-6">
                  <p className="font-inter font-semibold text-xs leading-[130%]">
                    Novinka
                  </p>
                </div>
              )}

              <Image
                src="/basket/black-heart.svg"
                height={18}
                width={24}
                alt="wishlist"
                className="absolute right-1 top-2 heart-icon"
              />
              {/* Hover Button */}
              <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-4/5 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <ExpandableButton />
              </div>
            </div>

            {/* Card Text */}
            <div className="font-inter flex flex-col gap-1">
              <div>
                <h3 className="font-semibold text-base leading-[180%]">
                  {card.title}
                </h3>
                <p className="font-medium text-sm text-grey-light leading-[180%]">
                  {card.category}
                </p>
                <h2 className="text-lg font-semibold py-1 leading-[190%]">
                  {card.price}
                </h2>
              </div>
              <div className="flex gap-3">
                {card.colors.map((color, index) => (
                  <ColorDot key={index} color={color} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
const cardData = [
  {
    title: "iPhone 17 PRO (2023)",
    category: "Smartfóny",
    price: "1299 €",
    image: "/basket/iphone-pro.svg",
    colors: [
      "bg-cream",
      "bg-charcol-purple",
      "bg-pearl-gray",
      "bg-charcol-gray",
    ],
    hoverImage: "/basket/iphone14.svg",
  },
  {
    title: "iPhone 17 PRO (2023)",
    category: "Smartfóny",
    price: "1299 €",
    image: "/product/MacBook-Pro-16.svg",
    hoverImage: "/basket/airpods.svg",

    colors: [
      "bg-cream",
      "bg-charcol-purple",
      "bg-pearl-gray",
      "bg-charcol-gray",
    ],
  },
  {
    title: "iPhone 17 PRO (2023)",
    category: "Smartfóny",
    price: "1299 €",
    image: "/basket/airpods.svg",
    hoverImage: "/basket/iphone14.svg",

    colors: [
      "bg-cream",
      "bg-charcol-purple",
      "bg-pearl-gray",
      "bg-charcol-gray",
    ],
  },
  {
    title: "iPhone 17 PRO (2023)",
    category: "Smartfóny",
    price: "1299 €",
    image: "/basket/iphone-pro.svg",
    hoverImage: "/product/MacBook-Pro-16.svg",

    colors: [
      "bg-cream",
      "bg-charcol-purple",
      "bg-pearl-gray",
      "bg-charcol-gray",
    ],
  },
  {
    title: "iPhone 17 PRO (2023)",
    category: "Smartfóny",
    price: "1299 €",
    image: "/basket/iphone-pro.svg",
    hoverImage: "/product/MacBook-Pro-16.svg",

    colors: [
      "bg-cream",
      "bg-charcol-purple",
      "bg-pearl-gray",
      "bg-charcol-gray",
    ],
  },
];

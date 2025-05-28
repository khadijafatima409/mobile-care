import React from "react";
import TopNav from "./TopNav";
import Image from "next/image";
import Custombtn from "./Custombtn";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black px-[48px] py-1 text-white text-xs flex justify-between">
        <p>Pomoc & kontakt</p>
        <p>
          Rastislavova 68, Košice <span className="pl-2">+421 919 215 491</span>
        </p>
      </div>

      <TopNav />
      <div className="bg-secondory-red text-center font-bold text-sm py-1">
        <p className="text-white">Nové iPhone 14 PRO s 20% zľavou ✨</p>
      </div>

      <div className="bg-black px-[48px] text-white ">
        <div className="flex justify-between">
          <div className="">
            <ul className="flex gap-2">
              {navBtns.map((btn, i) => (
                <li key={i}>
                  <Custombtn iconSrc={btn.iconSrc} label={btn.label} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3">
            <Image src={"/logo.svg"} height={32} width={214} alt="logo" />
            <Image
              src={"/US-UK_APP_Badge.svg"}
              height={33}
              width={77}
              alt="premium partner"
            />
          </div>
          <div className="flex gap-4">
            {iconList.map((icon, idx) => (
              <Image
                key={idx}
                src={icon.src}
                height={24}
                width={24}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
        <div className="flex">
          <Custombtn
            label="Všetky kategórie"
            iconSrc="/icons/menu.svg"
            iconPosition="right"
          />
          <div className="flex gap-4">
            {tabBtns.map((tab, idx) => (
              <Custombtn key={idx} label={tab.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const navBtns = [
  { iconSrc: "/icons/predaj.svg", label: "Výpredaj" },
  { iconSrc: "/icons/vinky.svg", label: "Novinky" },
  { iconSrc: "/icons/servis.svg", label: "MC Servis" },
];

const iconList = [
  { src: "/icons/brand.svg", alt: "brand" },
  { src: "/icons/heart.svg", alt: "heart" },
  { src: "/icons/bag.svg", alt: "bag" },
];

const tabBtns = [
  { label: "iPhone" },
  { label: "iPad" },
  { label: "MacBook" },
  { label: "Apple Airpods" },
  { label: "Smarthome" },
  { label: "Príslušenstvo" },
];

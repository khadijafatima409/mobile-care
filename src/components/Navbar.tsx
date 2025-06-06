"use client";

import React, { useState } from "react";
import TopNav from "./TopNav";
import Image from "next/image";
import Custombtn from "./Custombtn";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      <div className="bg-black  py-1 text-white text-xs flex justify-between px-12">
        <p>Pomoc & kontakt</p>
        <p>
          Rastislavova 68, Košice <span className="pl-2">+421 919 215 491</span>
        </p>
      </div>

      <TopNav />
      <div className="bg-secondory-red text-center font-bold text-sm py-1">
        <p className="text-white">Nové iPhone 14 PRO s 20% zľavou ✨</p>
      </div>

      <div className="bg-black text-white flex flex-col gap-4 px-12 pb-4">
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
        <div className="flex gap-4 justify-between">
          <Custombtn
            label="Všetky kategórie"
            iconSrc="/icons/menu.svg"
            iconPosition="right"
            className="bg-white text-black gap-4 font-bold text-base hover:bg-purple-1 hover:text-white"
            onClick={() => setIsSidebarOpen(true)}
          />
          <div className="flex gap-4">
            {tabBtns.map((tab, idx) => (
              <Custombtn key={idx} label={tab.label} />
            ))}
          </div>
          <div className="flex items-center bg-white  px-3 py-1 border-2">
            <Image
              src="/icons/search.svg"
              alt="search"
              width={24}
              height={24}
            />
            <input
              type="text"
              placeholder="Zadajte názov produktu"
              className="ml-2 outline-none border-none  w-full placeholder-gray-500 text-base"
            />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
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

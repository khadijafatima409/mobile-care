"use client";

import Image from "next/image";
import { useState } from "react";
import selectIcon from "../../public/icons/arrow.svg";
interface CustomSelectProps {
  defaultSelected: string;
  items: string[];
}
const CustomSelect = ({ defaultSelected, items }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultSelected);
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };
  return (
    <div className="w-40 relative flex flex-col items-center  border-2 border-white-smoke">
      <button
        type="button"
        className="font-bold px-4 py-2  w-full flex justify-between items-center  text-base  border-2 border-transparent duration-300"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {selectedItem}
        <Image src={selectIcon} alt="" />
      </button>
      {isOpen && (
        <div className=" absolute top-14 flex flex-col items-start rounded-lg w-[99%]">
          {items.map((item, i) => {
            return (
              <div
                key={i}
                className="flex gap-4  w-[100%] p-2 cursor-pointer "
                onClick={() => handleItemClick(item)}
              >
                <h3>{item}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

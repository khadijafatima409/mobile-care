import Image from "next/image";
import React, { useState } from "react";

interface SubmenubarProps {
  items: {
    id: number;
    label: string;
  }[];
}

const Submenubar = ({ items }: SubmenubarProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div>
      <ul className="group flex flex-col gap-2 text-black cursor-pointer pb-4">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const isHovered = hoveredIndex === index;

          return (
            <li
              key={item.id}
              className="group flex justify-between items-center py-1 cursor-pointer"
              onClick={() => handleToggle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <p
                className={`font-['Inter'] text-base leading-[140%] transition-all ${
                  isActive
                    ? "font-bold text-black "
                    : "font-semibold text-black group-hover:underline"
                }`}
              >
                {item.label}
              </p>

              <div
                className={`px-[10px] py-[7px] transition-all ${
                  isActive ? "bg-black" : "bg-white"
                }`}
              >
                <Image
                  src={
                    isActive
                      ? "/icons/light-rightarrow.svg"
                      : isHovered
                      ? "/icons/blue-rightarrow.svg"
                      : "/icons/light-rightarrow.svg"
                  }
                  alt="arrow"
                  width={10}
                  height={16}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Submenubar;

// const sidebarItems = [
//   {
//     id: 1,
//     label: "Všetky kategórie",
//   },
//   {
//     id: 2,
//     label: "iPhone",
//   },
//   {
//     id: 3,
//     label: "Apple AirPods",
//   },
//   {
//     id: 4,
//     label: "Macbook",
//   },
//   {
//     id: 5,
//     label: "Apple Watch",
//   },
//   {
//     id: 6,
//     label: "Príslušenstvo",
//   },
// ];

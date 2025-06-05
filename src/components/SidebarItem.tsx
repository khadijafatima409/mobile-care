import { SidebarItemType } from "../type";
import { sidebarGroups } from "@/data/sidebarGroups";

import Image from "next/image";
import React, { useState } from "react";

interface Props {
  setSelectedLabel: (label: string) => void;
  setSelectedSubItems: (items: SidebarItemType[]) => void;
  isSubItem?: boolean;
  items?: SidebarItemType[];
}

const SidebarItem = ({
  setSelectedLabel,
  setSelectedSubItems,
  isSubItem,
  items,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleToggle = (
    index: number,
    label: string,
    item: SidebarItemType
  ) => {
    setActiveIndex((prev) => (prev === index ? null : index));
    setSelectedLabel(label);
    // setSelectedSubItems(items);
    setSelectedSubItems(item.subItems || []);
  };

  let itemOffset = 0; // to keep track of item index across groups

  return (
    <div className="flex flex-col gap-6 text-black">
      {" "}
      {/* gap-6 = 24px between groups */}
      {(items
        ? [{ id: "sub-group", hasBorder: false, hasRightIcon: true, items }]
        : sidebarGroups
      ).map((group) => {
        return (
          <ul
            key={group.id}
            className={`flex flex-col gap-2 cursor-pointer ${
              group.hasBorder ? "border-b-2 border-b-soft-purple pb-4" : ""
            }`}
          >
            {group.items.map((item, index) => {
              const globalIndex = itemOffset + index;
              const isActive = activeIndex === globalIndex;
              const isHovered = hoveredIndex === index;

              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-1"
                  onClick={() =>
                    item.hasRightIcon ?? group.hasRightIcon
                      ? handleToggle(globalIndex, item.label, item)
                      : null
                  }
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex gap-2">
                    {item.leftIcon && (
                      <Image
                        src={item.leftIcon}
                        alt="icon"
                        width={16}
                        height={16}
                      />
                    )}
                    <p
                      className={`font-['Inter'] text-base leading-[140%] transition-all ${
                        isActive
                          ? `font-bold ${
                              isSubItem ? "text-black" : "text-white"
                            }`
                          : `font-semibold ${
                              isSubItem
                                ? "text-black group-hover:underline"
                                : "text-lavender-mist hover:underline"
                            }`
                      }`}
                    >
                      {item.label}
                    </p>
                    {item.rightElement && (
                      <div className="text-xs font-semibold  bg-secondory-yellow px-1 py-0.5 flex justify-center items-center">
                        {item.rightElement}
                      </div>
                    )}
                  </div>

                  {(item.hasRightIcon ?? group.hasRightIcon) && (
                    <div
                      className={`px-[10px] py-[7px] transition-all ${
                        isActive ? (isSubItem ? "bg-black" : "bg-white") : ""
                      }`}
                    >
                      <Image
                        src={
                          isActive
                            ? isSubItem
                              ? "/icons/white-rightarrow.svg"
                              : "/icons/blue-rightarrow.svg"
                            : isHovered
                            ? isSubItem
                              ? "/icons/blue-rightarrow.svg"
                              : "/icons/white-rightarrow.svg"
                            : "/icons/light-rightarrow.svg"
                        }
                        alt="arrow"
                        width={10}
                        height={16}
                      />
                    </div>
                  )}
                </li>
              );
            })}
            {(() => {
              itemOffset += group.items.length;
              return null;
            })()}
          </ul>
        );
      })}
    </div>
  );
};

export default SidebarItem;

// const sidebarGroups: SidebarGroupType[] = [
//   {
//     id: "group-1",
//     hasBorder: true,
//     hasRightIcon: true,
//     items: [
//       {
//         id: 1,
//         label: "Všetky kategórie",
//         subItems: [
//           {
//             id: 101,
//             label: "iPhone",
//             hasRightIcon: true,
//             leftIcon: "/basket/iphone-pro.svg",
//           },
//           { id: 102, label: "Apple AirPods", leftIcon: "/basket/airpods.svg" },
//           {
//             id: 103,
//             label: "Macbook",
//             leftIcon: "/product/MacBook-Pro-16.svg",
//           },
//           { id: 104, label: "iPad", leftIcon: "/product/ipad.svg" },
//           { id: 105, label: "Smarthome", leftIcon: "/product/smarthome.svg" },
//           {
//             id: 106,
//             label: "Príslušenstvo",
//             leftIcon: "/product/pngwing 5.svg",
//           },
//           { id: 107, label: "Herná zóna", leftIcon: "/product/gamezone.svg" },
//           { id: 108, label: "Smarthome", leftIcon: "/product/speaker.svg" },
//           { id: 109, label: "PC", leftIcon: "/product/PC.svg" },
//           {
//             id: 110,
//             label: "Elektronika",
//             leftIcon: "/product/electronic.svg",
//           },
//         ],
//       },
//       {
//         id: 2,
//         label: "iPhone",
//         subItems: [
//           { id: 111, label: "iPhone 14" },
//           { id: 112, label: "iPhone 13" },
//           { id: 113, label: "iPhone SE" },
//         ],
//       },
//       {
//         id: 3,
//         label: "Apple AirPods",
//         subItems: [
//           { id: 114, label: "AirPods Pro" },
//           { id: 115, label: "AirPods Max" },
//         ],
//       },
//       {
//         id: 4,
//         label: "Macbook",
//         subItems: [
//           { id: 116, label: "Macbook Air" },
//           { id: 117, label: "Macbook Pro" },
//         ],
//       },
//       { id: 5, label: "Apple Watch" },
//       { id: 6, label: "Príslušenstvo" },
//     ],
//   },
//   {
//     id: "group-2",
//     hasBorder: true,
//     hasRightIcon: true,
//     items: [
//       { id: 7, label: "Najpredávanejšie" },
//       {
//         id: 8,
//         label: "Najnovšie",
//         leftIcon: "/icons/najno.svg",
//         rightElement: "Novinka",
//       },
//       {
//         id: 9,
//         label: "Zľavy",
//         leftIcon: "/icons/zlavy.svg",
//         rightElement: "Výpredaj",
//       },
//     ],
//   },
//   {
//     id: "group-3",
//     hasBorder: true,
//     hasRightIcon: false,
//     items: [
//       { id: 10, label: "Kontakt" },
//       { id: 11, label: "Často kladené otázky" },
//       { id: 12, label: "Blog" },
//     ],
//   },
//   {
//     id: "group-4",
//     hasBorder: true,
//     hasRightIcon: false,
//     items: [
//       { id: 13, label: "Obľúbené produkty", leftIcon: "/icons/heart.svg" },
//     ],
//   },
//   {
//     id: "group-5",
//     hasBorder: false,
//     hasRightIcon: false,
//     items: [{ id: 14, label: "Sledujte nás" }],
//   },
// ];

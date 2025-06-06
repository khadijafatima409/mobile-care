import { SidebarItemType } from "../type";
import { sidebarGroups } from "@/data/sidebarGroups";

import Image from "next/image";
import React, { useState } from "react";

interface Props {
  setSelectedLabel: (label: string, subItems?: SidebarItemType[]) => void;
  setSelectedSubItems: (items: SidebarItemType[]) => void;
  isSubItem?: boolean;
  items?: SidebarItemType[];
  selectedLabel?: string | null;
  isMainSidebar?: boolean;
}

const SidebarItem = ({
  setSelectedLabel,
  isSubItem,
  items,
  selectedLabel,
}: Props) => {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // const handleToggle = (
  //   index: number,
  //   label: string,
  //   item: SidebarItemType
  // ) => {
  //   setActiveIndex((prev) => (prev === index ? null : index));
  //   setSelectedLabel(label);
  //   setSelectedSubItems(item.subItems || []);
  // };
  const handleToggle = (label: string, item: SidebarItemType) => {
    if (item.subItems && item.subItems.length > 0) {
      // If item has sub-items, show them
      setSelectedLabel(label, item.subItems);
    } else {
      // If no sub-items, just select the item
      setSelectedLabel(label, []);
    }
  };

  let itemOffset = 0; // to keep track of item index across groups

  return (
    <div className="flex flex-col gap-6 text-black">
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
              // const globalIndex = itemOffset + index;
              // const isActive = activeIndex === globalIndex;
              // const isHovered = hoveredIndex === index;
              const globalIndex = itemOffset + index;
              const isActive = selectedLabel === item.label;
              const isHovered = hoveredIndex === index;
              const hasRightIcon = item.hasRightIcon ?? group.hasRightIcon;
              const hasSubItems = item.subItems && item.subItems.length > 0;

              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-1"
                  // onClick={() =>
                  //   item.hasRightIcon ?? group.hasRightIcon
                  //     ? handleToggle(globalIndex, item.label, item)
                  //     : null
                  // }
                  onClick={() =>
                    hasRightIcon && hasSubItems
                      ? handleToggle(item.label, item)
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

                  {/* {(item.hasRightIcon ?? group.hasRightIcon) && ( */}
                  {hasRightIcon && hasSubItems && (
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

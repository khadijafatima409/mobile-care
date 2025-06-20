import Image from "next/image";
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import { SidebarItemType } from "../type";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [selectedSubItems, setSelectedSubItems] = useState<
    SidebarItemType[] | null
  >(null);
  const [subSelectedLabel, setSubSelectedLabel] = useState<string | null>(null);
  const [subSelectedSubItems, setSubSelectedSubItems] = useState<
    SidebarItemType[] | null
  >(null);

  const handleMainItemSelect = (
    label: string,
    subItems?: SidebarItemType[]
  ) => {
    setSelectedLabel(label);
    setSelectedSubItems(subItems ?? null);
    // Reset sub-submenu when main item changes
    setSubSelectedLabel(null);
    setSubSelectedSubItems(null);
  };

  const handleSubItemSelect = (label: string, subItems?: SidebarItemType[]) => {
    setSubSelectedLabel(label);
    setSubSelectedSubItems(subItems ?? null);
  };
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40 "
        onClick={onClose}
      />

      <div className="flex justify-between">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 h-full  bg-purple-1 z-50  shadow-lg transition-all duration-300 pt-6 px-12 overflow-y-scroll scrollbar-hide ">
          {/* topnav */}
          <div className="flex gap-20 items-center justify-center pb-8">
            <Image src={"/logo.svg"} height={48} width={213} alt={"logo"} />
            <button
              onClick={onClose}
              className="font-bold text-black  border-2 p-[6px] "
            >
              <Image
                src={"/icons/close.svg"}
                height={14}
                width={14}
                alt="close"
              />
            </button>
          </div>

          <SidebarItem
            setSelectedLabel={handleMainItemSelect}
            setSelectedSubItems={() => {}} // Not used in this context
            selectedLabel={selectedLabel}
            isMainSidebar={true}
          />
        </div>
        {/* Submenu */}
        {selectedLabel && selectedSubItems && (
          <div className="bg-white px-8 pt-6 fixed top-0 left-[419px] h-full w-[424px] z-50 hadow-lg transition-all duration-300 overflow-y-scroll scrollbar-hide ">
            <h2 className="text-2xl font-bold font-['MC'] leading-[120%] mb-4 text-purple-1">
              {selectedLabel}
            </h2>
            <div className="space-y-2">
              <SidebarItem
                setSelectedLabel={handleSubItemSelect}
                setSelectedSubItems={() => {}} // Not used in this context
                isSubItem={true}
                items={selectedSubItems}
                selectedLabel={subSelectedLabel}
                isMainSidebar={false}
                isSecondSubmenu={false}
              />
            </div>
            <div className="relative h-[258px] w-full overflow-hidden mt-12 mb-28">
              <div className="absolute inset-0 animate-baner-slider"></div>
            </div>
          </div>
        )}

        {/* Second Submenu */}
        {subSelectedLabel && subSelectedSubItems && (
          <div className="bg-white px-8 pt-6 fixed top-0 left-[843px] h-full w-[424px] z-50 transition-all duration-300 overflow-y-auto border-l-2 border-white-smoke">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">
              {subSelectedLabel}
            </h2>
            <div className="space-y-2">
              <SidebarItem
                setSelectedLabel={handleSubItemSelect} // No further nesting
                setSelectedSubItems={() => {}}
                isSubItem={true}
                items={subSelectedSubItems}
                selectedLabel={subSelectedLabel}
                isMainSidebar={false}
                isSecondSubmenu={true}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;

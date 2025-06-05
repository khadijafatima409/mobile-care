// components/Sidebar.tsx

import Image from "next/image";
import React, { useState } from "react";
import SidebarItem from "./SidebarItem";
import Submenubar from "./Submenubar";
import { SidebarItemType } from "../type";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [selectedSubItems, setSelectedSubItems] = useState<
    SidebarItemType[] | null
  >(null);

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
        <div className="fixed top-0 left-0 h-full  bg-purple-1 z-50  shadow-lg transition-all duration-300 pt-6 px-12 overflow-y-scroll ">
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
            setSelectedLabel={setSelectedLabel}
            setSelectedSubItems={setSelectedSubItems}
          />
        </div>
        {/* Submenu */}
        {selectedLabel && selectedSubItems && (
          <div className="bg-white px-8 pt-6 fixed top-0 left-[30%] h-full w-[424px] z-50 hadow-lg transition-all duration-300">
            <h2 className="text-2xl font-bold font-['MC'] leading-[120%] mb-4 text-purple-1">
              {selectedLabel}
            </h2>
            <Submenubar items={selectedSubItems} />
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;

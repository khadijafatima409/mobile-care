// components/Sidebar.tsx

import Image from "next/image";
import React from "react";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40 "
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full  bg-purple-1 z-50  shadow-lg transition-all duration-300 pt-6 px-12 ">
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

        <SidebarItem />
      </div>
    </>
  );
};

export default Sidebar;

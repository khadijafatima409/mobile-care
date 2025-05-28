import Image from "next/image";
import React from "react";
interface CustomBtnProps {
  iconSrc?: string;
  label: string;
  iconPosition?: "left" | "right";
}
const Custombtn = ({
  iconSrc,
  label,
  iconPosition = "left",
}: CustomBtnProps) => {
  return (
    <div>
      <button className="flex items-center justify-center px-6 py-3 gap-2 hover:bg-gray-700 hover:cursor-pointer hover:text-purple-1 transition-all">
        {iconSrc && iconPosition === "left" && (
          <Image src={iconSrc} alt={label} width={24} height={24} />
        )}
        <p>{label}</p>
        {iconSrc && iconPosition === "right" && (
          <Image src={iconSrc} alt={label} width={24} height={24} />
        )}
      </button>
    </div>
  );
};

export default Custombtn;

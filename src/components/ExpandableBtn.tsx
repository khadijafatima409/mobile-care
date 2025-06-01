"use client";
import Image from "next/image";
import { useState } from "react";

const sizes = ["64GB", "126GB", "256GB", "512GB", "1TB", "2TB"];

const ExpandableButton = () => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false); // Track if a size is selected

  const handleSelect = (size: string) => {
    console.log("Selected size:", size);
    setSelected(true);
    setExpanded(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ease-in-out bg-black text-white rounded cursor-pointer ${
        expanded ? "" : "overflow-hidden"
      }`}
      onClick={() => setExpanded((prev) => !prev)}
    >
      {/* Button Head: Show only if NOT expanded */}
      {!expanded && (
        <div className="flex items-center h-[60px] px-4">
          {selected ? (
            <div className="flex gap-2">
              <p>Pridané do Košíka</p>
              <Image
                src={"/icons/tick.jpg"}
                height="20"
                width="20"
                alt="tick"
              />
            </div>
          ) : (
            <div className="flex gap-2">
              <Image
                src={"/icons/plus.jpg"}
                height="20"
                width="20"
                alt="plus"
              />
              <p>rýchly nákup</p>
            </div>
          )}
        </div>
      )}

      {/* Size Options */}
      {expanded && (
        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm px-4 py-2 max-h-60 overflow-y-auto">
          {sizes.map((size) => (
            <li
              key={size}
              className="p-2 text-center bg-gray-800 rounded hover:bg-gray-300 hover:text-black transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(size);
              }}
            >
              {size}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpandableButton;

import React from "react";

const TopNav = () => {
  return (
    <div className="text-black bg-white-smoke px-12 flex justify-end py-1 text-xs font-semibold">
      <ul className="flex gap-4">
        {navItems.map((item, index) => (
          <li key={index} className="cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopNav;

const navItems = [
  "Sledovanie zásielky",
  "Vrátenie tovaru",
  "O nás",
  "FAQ",
  "FAQ",
  "Blog",
];

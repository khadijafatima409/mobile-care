import React from "react";
interface FooterNavItemsProps {
  title: string;
  items: string[];
}

const FooterNavItems = ({ title, items }: FooterNavItemsProps) => {
  return (
    <div className="flex flex-col gap-8 font-inter text-sm leading-[180%] text-white">
      <h2 className="font-semibold">{title}</h2>
      <ul className="flex flex-col gap-4 font-normal text-grey-light">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavItems;

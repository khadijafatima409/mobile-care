import Image from "next/image";
import React, { useState } from "react";

type SidebarItemType = {
  id: number;
  label: string;
  leftIcon?: string;
  rightElement?: string | React.ReactNode;
};

type SidebarGroupType = {
  id: string;
  hasBorder: boolean;
  hasRightIcon: boolean;
  items: SidebarItemType[];
};

const SidebarItem = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  let itemOffset = 0; // to keep track of item index across groups

  return (
    <div className="flex flex-col gap-6 text-black">
      {" "}
      {/* gap-6 = 24px between groups */}
      {sidebarGroups.map((group) => {
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

              return (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-1"
                  onClick={() =>
                    group.hasRightIcon && handleToggle(globalIndex)
                  }
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
                          ? "font-bold text-white "
                          : "font-semibold text-lavender-mist hover:underline"
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

                  {group.hasRightIcon && (
                    <div
                      className={`px-[10px] py-[7px] transition-all ${
                        isActive ? "bg-white" : "bg-purple-1"
                      }`}
                    >
                      <Image
                        src={
                          isActive
                            ? "/icons/blue-rightarrow.svg"
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

const sidebarGroups: SidebarGroupType[] = [
  {
    id: "group-1",
    hasBorder: true,
    hasRightIcon: true,
    items: [
      { id: 1, label: "Všetky kategórie" },
      { id: 2, label: "iPhone" },
      { id: 3, label: "Apple AirPods" },
      { id: 4, label: "Macbook" },
      { id: 5, label: "Apple Watch" },
      { id: 6, label: "Príslušenstvo" },
    ],
  },
  {
    id: "group-2",
    hasBorder: true,
    hasRightIcon: true,
    items: [
      { id: 7, label: "Najpredávanejšie" },
      {
        id: 8,
        label: "Najnovšie",
        leftIcon: "/icons/najno.svg",
        rightElement: "Novinka",
      },
      {
        id: 9,
        label: "Zľavy",
        leftIcon: "/icons/zlavy.svg",
        rightElement: "Výpredaj",
      },
    ],
  },
  {
    id: "group-3",
    hasBorder: true,
    hasRightIcon: false,
    items: [
      { id: 10, label: "Kontakt" },
      { id: 11, label: "Často kladené otázky" },
      { id: 12, label: "Blog" },
    ],
  },
  {
    id: "group-4",
    hasBorder: true,
    hasRightIcon: false,
    items: [
      { id: 13, label: "Obľúbené produkty", leftIcon: "/icons/heart.svg" },
    ],
  },
  {
    id: "group-5",
    hasBorder: false,
    hasRightIcon: false,
    items: [{ id: 14, label: "Sledujte nás" }],
  },
];

// const sidebarGroups = [
//   {
//     id: "group-1",
//     hasBorder: true,
//     hasIcon: true,
//     items: [
//       { id: 1, label: "Všetky kategórie" },
//       { id: 2, label: "iPhone" },
//       { id: 3, label: "Apple AirPods" },
//       { id: 4, label: "Macbook" },
//       { id: 5, label: "Apple Watch" },
//       { id: 6, label: "Príslušenstvo" },
//     ],
//   },
//   {
//     id: "group-2",
//     hasBorder: true,
//     hasIcon: true,
//     items: [
//       { id: 7, label: "Najpredávanejšie" },
//       { id: 8, label: "Najnovšie" },
//       { id: 9, label: "Zľavy" },
//     ],
//   },
//   {
//     id: "group-3",
//     hasBorder: true,
//     hasIcon: false,
//     items: [
//       { id: 10, label: "Kontakt" },
//       { id: 11, label: "Často kladené otázky" },
//       { id: 12, label: "Blog" },
//     ],
//   },
//   {
//     id: "group-4",
//     hasBorder: true,
//     hasIcon: false,
//     items: [{ id: 13, label: "Obľúbené produkty" }],
//   },
// ];

// import Image from "next/image";
// import React, { useState } from "react";

// const SidebarItem = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const handleToggle = (index: number) => {
//     setActiveIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <ul className="group flex flex-col gap-2 text-black cursor-pointer border-b-2 border-b-soft-purple pb-4">
//       {sidebarItems.map((item, index) => {
//         const isActive = activeIndex === index;

//         return (
//           <li
//             key={item.id}
//             className="group flex justify-between items-center py-1 cursor-pointer"
//             onClick={() => handleToggle(index)}
//           >
//             <p
//               className={`font-['Inter'] text-base leading-[140%] transition-all ${
//                 isActive
//                   ? "font-bold text-white underline"
//                   : "font-semibold text-lavender-mist group-hover:underline"
//               }`}
//             >
//               {item.label}
//             </p>

//             <div
//               className={`px-[10px] py-[7px] transition-all ${
//                 isActive ? "bg-white" : "bg-purple-1"
//               }`}
//             >
//               <Image
//                 src={
//                   isActive
//                     ? "/icons/blue-rightarrow.svg"
//                     : "/icons/light-rightarrow.svg"
//                 }
//                 alt="arrow"
//                 width={10}
//                 height={16}
//               />
//             </div>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default SidebarItem;
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

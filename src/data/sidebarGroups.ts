// src/data/sidebarGroups.ts
import { SidebarGroupType } from "../type";

export const sidebarGroups: SidebarGroupType[] = [
  {
    id: "group-1",
    hasBorder: true,
    hasRightIcon: true,
    items: [
      {
        id: 1,
        label: "Všetky kategórie",
        subItems: [
          {
            id: 101,
            label: "iPhone",
            hasRightIcon: true,
            leftIcon: "/basket/iphone-pro.svg",
          },
          { id: 102, label: "Apple AirPods", leftIcon: "/basket/airpods.svg" },
          {
            id: 103,
            label: "Macbook",
            leftIcon: "/product/MacBook-Pro-16.svg",
          },
          { id: 104, label: "iPad", leftIcon: "/product/ipad.svg" },
          { id: 105, label: "Smarthome", leftIcon: "/product/smarthome.svg" },
          {
            id: 106,
            label: "Príslušenstvo",
            leftIcon: "/product/pngwing 5.svg",
          },
          { id: 107, label: "Herná zóna", leftIcon: "/product/gamezone.svg" },
          { id: 108, label: "Smarthome", leftIcon: "/product/speaker.svg" },
          { id: 109, label: "PC", leftIcon: "/product/PC.svg" },
          {
            id: 110,
            label: "Elektronika",
            leftIcon: "/product/electronic.svg",
          },
        ],
      },
      {
        id: 2,
        label: "iPhone",
        subItems: [
          { id: 111, label: "iPhone 14" },
          { id: 112, label: "iPhone 13" },
          { id: 113, label: "iPhone SE" },
        ],
      },
      {
        id: 3,
        label: "Apple AirPods",
        subItems: [
          { id: 114, label: "AirPods Pro" },
          { id: 115, label: "AirPods Max" },
        ],
      },
      {
        id: 4,
        label: "Macbook",
        subItems: [
          { id: 116, label: "Macbook Air" },
          { id: 117, label: "Macbook Pro" },
        ],
      },
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

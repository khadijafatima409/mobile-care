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
            subItems: [
              { id: 1001, label: "iPhone 15 Pro" },
              { id: 1002, label: "iPhone 15" },
              { id: 1003, label: "iPhone 14" },
            ],
          },
          {
            id: 102,
            label: "Apple AirPods",
            leftIcon: "/basket/airpods.svg",
            subItems: [
              { id: 1001, label: "iPhone 15 Pro" },
              { id: 1002, label: "iPhone 15" },
              { id: 1003, label: "iPhone 14" },
            ],
          },
          {
            id: 103,
            label: "Macbook",
            leftIcon: "/product/MacBook-Pro-16.svg",
            subItems: [
              {
                id: 1001,
                label: "Zobraziť všetko",
                subItems: [
                  { id: 2001, label: "Zobraziť všetko subitem 1" },
                  { id: 2002, label: "Zobraziť všetko subitem 2" },
                  { id: 2003, label: "Zobraziť všetko subitem 3" },
                ],
              },
              {
                id: 1002,
                label: "Air",
                subItems: [
                  { id: 2001, label: "Air subitem 1" },
                  { id: 2002, label: "Air subitem 2" },
                  { id: 2003, label: "Air subitem 3" },
                ],
              },
              { id: 1003, label: "Pro" },
              { id: 1003, label: "iMac 24”" },
              { id: 1003, label: "Mini" },
              {
                id: 1003,
                label: "Studio",
                subItems: [
                  { id: 2001, label: "Studio subitem 1" },
                  { id: 2002, label: "Studio subitem 2" },
                  { id: 2003, label: "Studio subitem 3" },
                ],
              },
              { id: 1003, label: "Mac Pro" },
              { id: 1003, label: "Displeje" },
              { id: 1003, label: "Doplnky pre Mac" },
            ],
          },
          {
            id: 104,
            label: "iPad",
            leftIcon: "/product/ipad.svg",
            subItems: [
              { id: 1001, label: "iPhone 15 Pro" },
              { id: 1002, label: "iPhone 15" },
              { id: 1003, label: "iPhone 14" },
            ],
          },
          {
            id: 105,
            label: "Smarthome",
            leftIcon: "/product/smarthome.svg",
            subItems: [
              { id: 1001, label: "iPhone 15 Pro" },
              { id: 1002, label: "iPhone 15" },
              { id: 1003, label: "iPhone 14" },
            ],
          },

          {
            id: 106,
            label: "Príslušenstvo",
            leftIcon: "/product/pngwing 5.svg",
            subItems: [
              { id: 1001, label: "iPhone 15 Pro" },
              { id: 1002, label: "iPhone 15" },
              { id: 1003, label: "iPhone 14" },
            ],
          },
          {
            id: 107,
            label: "Herná zóna",
            leftIcon: "/product/gamezone.svg",
            subItems: [
              { id: 1001, label: "iPhone 15 Pro" },
              { id: 1002, label: "iPhone 15" },
              { id: 1003, label: "iPhone 14" },
            ],
          },
          {
            id: 108,
            label: "Smarthome",
            leftIcon: "/product/speaker.svg",
            subItems: [
              { id: 1001, label: "iPhone 15 Pro" },
              { id: 1002, label: "iPhone 15" },
              { id: 1003, label: "iPhone 14" },
            ],
          },
          {
            id: 109,
            label: "PC",
            leftIcon: "/product/PC.svg",
            subItems: [
              { id: 1001, label: "iPhone 15 Pro" },
              { id: 1002, label: "iPhone 15" },
              { id: 1003, label: "iPhone 14" },
            ],
          },
          {
            id: 110,
            label: "Elektronika",
            leftIcon: "/product/electronic.svg",
            subItems: [
              { id: 1001, label: "iPhone 15 Pro" },
              { id: 1002, label: "iPhone 15" },
              { id: 1003, label: "iPhone 14" },
            ],
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
      {
        id: 5,
        label: "iPad",
        subItems: [
          { id: 116, label: "Macbook Air" },
          { id: 117, label: "Macbook Pro" },
        ],
      },
      {
        id: 7,
        label: "Apple Watch",
        subItems: [
          { id: 116, label: "Macbook Air" },
          { id: 117, label: "Macbook Pro" },
        ],
      },
      {
        id: 8,
        label: "Príslušenstvo",
        subItems: [
          { id: 116, label: "Macbook Air" },
          { id: 117, label: "Macbook Pro" },
        ],
      },
    ],
  },
  {
    id: "group-2",
    hasBorder: true,
    hasRightIcon: true,
    items: [
      { id: 9, label: "Najpredávanejšie" },
      {
        id: 10,
        label: "Najnovšie",
        leftIcon: "/icons/najno.svg",
        rightElement: "Novinka",
      },
      {
        id: 11,
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
      { id: 12, label: "Kontakt" },
      { id: 13, label: "Často kladené otázky" },
      { id: 14, label: "Blog" },
    ],
  },
  {
    id: "group-4",
    hasBorder: true,
    hasRightIcon: false,
    items: [
      { id: 15, label: "Obľúbené produkty", leftIcon: "/icons/heart.svg" },
    ],
  },
  {
    id: "group-5",
    hasBorder: false,
    hasRightIcon: false,
    items: [{ id: 16, label: "Sledujte nás" }],
  },
];

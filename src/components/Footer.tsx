import Image from "next/image";
import React from "react";
import Custombtn from "./Custombtn";
import FooterNavItems from "./FooterNavItems";

const Footer = () => {
  return (
    <div className="bg-black py-[72px] px-12 gap-16 flex flex-col">
      <div className="flex flex-col gap-14">
        <div className="flex justify-between  ">
          <div className="flex flex-col gap-8">
            <Image src={"/logo.svg"} height={60} width={400} alt={"logo"} />
            <div className="flex flex-col gap-4">
              <h2 className="leading-[120%] text-large font-MC font-bold text-white ">
                Postaráme sa o vás
              </h2>
              <p className="font-inter font-medium text-base leading-[180%] text-grey-light">
                Odomknite nekonečné možnosti s naším prémiovým výberom Apple
                produktov.
              </p>
            </div>
          </div>
          <div className="bg-purple-1 p-8 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="py-2 flex justify-between">
                <h2 className="text-large font-bold leading-[120%] font-MC text-white">
                  Získaj 10% zľavu
                </h2>
                <Image
                  src={"/icons/percentage.svg"}
                  height={66}
                  width={66}
                  alt=""
                />
              </div>
              <p className="font-inter font-medium text-base leading-[180%] text-white">
                Ušetrite 10% na ďalšom nákupe produktov Apple, ak sa ešte dnes
                pripojíte k našej komunite odberateľov noviniek!
              </p>
            </div>
            <div className="flex gap-6 justify-between">
              <div className="bg-white py-3 px-4 flex gap-7">
                <input
                  type="text"
                  placeholder="Vaša e-mailová adresa"
                  className="font-inter font-medium text-sm leading-[180%] h-[25px] w-[425px] outline-none"
                />
                <Image
                  src={"/icons/search.svg"}
                  height={"24"}
                  width={"24"}
                  alt="search"
                />
              </div>
              <Custombtn
                label="Odoslať"
                className="font-bold text-base font-inter bg-black text-white hover:bg-purple-1 hover:text-white"
              />
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className=" flex justify-between">
          <div className="flex flex-col gap-[101px]">
            <div className="flex flex-col gap-8 font-inter  text-sm leading-[180%] text-white">
              <h2 className="font-semibold">Kontaktné údaje</h2>
              <ul className="flex flex-col gap-4 font-normal text-grey-light">
                <li>+421 919 215 491</li>
                <li>Rastislavova 68, Košice</li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h2 className="font-inter font-semibold text-sm leading-[180%] text-white">
                Sledujte nás
              </h2>
              <div>
                <ul className="flex gap-2 items-center">
                  {socialLinks.map(({ href, icon, alt }, index) => (
                    <li key={index} className="p-2">
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <Image src={icon} alt={alt} height={32} width={32} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-16">
            {footerSections.map((section, index) => (
              <FooterNavItems
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <ul className="font-bold font-Mc text-min-large leading-[120%] flex justify-between py-4">
          <li>Slovensko</li>
          <li>Česká republika</li>
          <li>România</li>
          <li>Polska</li>
        </ul>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
const socialLinks = [
  {
    href: "https://facebook.com",
    icon: "/icons/facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://instagram.com",
    icon: "/icons/instagram.svg",
    alt: "Instagram",
  },
  { href: "https://youtube.com", icon: "/icons/youtube.svg", alt: "Youtube" },
  {
    href: "https://whatsapp.com",
    icon: "/icons/whatsapp.svg",
    alt: "Whatsaap",
  },
  { href: "https://tiktok.com", icon: "/icons/tik_tok.svg", alt: "Tiktok" },
];
const footerSections = [
  {
    title: "Kontaktné údaje",
    items: ["Kontaktujte nás", "Vrátenie zásielky"],
  },
  {
    title: "Kontaktné údaje",
    items: [
      "Kontaktujte nás",
      "FAQs",
      "Vrátenie zásielky",
      "Doručenie",
      "Sledovanie zásielky",
      "Platby a cenotvorba",
    ],
  },
  {
    title: "OIné",
    items: [
      "Iné iné a niečo iné",
      "Iné iné a niečo iné",
      "Iné iné iné",
      "Iné iné a iné",
    ],
  },
  {
    title: "Mobilecare",
    items: ["O nás", "Blog", "Kariéra"],
  },
  {
    title: "Členstvo, zľavy a akcie",
    items: ["Odporuč nás a dostaň zľavu 10%", "Vernostný program"],
  },
];

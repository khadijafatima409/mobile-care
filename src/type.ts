export type SidebarItemType = {
  // id: number;
  // label: string;
  // leftIcon?: string;
  // rightElement?: string | React.ReactNode;
  // children?: SidebarItemType[];
  // subItems?: SidebarItemType[];
  // hasBorder?: boolean;
  id: number;
  label: string;
  leftIcon?: string;
  rightIcon?: string;
  rightElement?: string; // for text badges like "Novinka", "Výpredaj"
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  hasBorder?: boolean;
  subItems?: SidebarItemType[];
};

export type SidebarGroupType = {
  id: string;
  hasBorder: boolean;
  hasRightIcon: boolean;
  items: SidebarItemType[];
};

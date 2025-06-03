import Image from "next/image";

type SidebarItemProps = {
  id: string;
  leftIcon: string;
  text: string;
  rightIcon: string;
  activeRightIcon: string;
  tag?: string;
  isActive: boolean;
  onClick: () => void;
};

const SidebarItem = ({
  leftIcon,
  text,
  rightIcon,
  activeRightIcon,
  tag,
  isActive,
  onClick,
}: SidebarItemProps) => (
  <li
    onClick={onClick}
    className={`flex items-center justify-between py-1 cursor-pointer group transition-all ${
      isActive ? "text-lavender-mist" : "  text-white"
    }`}
  >
    <div className="flex items-center gap-2">
      {leftIcon && (
        <Image src={leftIcon} height={16} width={16} alt="Left Icon" />
      )}
      <p
        className={
          "font-['Inter'] font-bold text-base leading-[140%] tracking-[0] transition-all group-hover:underline"
        }
      >
        {text}
      </p>
      {tag && (
        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
          {tag}
        </span>
      )}
    </div>
    <div className="flex items-center gap-1">
      <div
        className={`py-[7.9px] px-[10.9px] flex justify-center items-center ${
          isActive ? "bg-transparent" : "bg-white"
        }`}
      >
        <Image
          src={isActive ? rightIcon : activeRightIcon}
          width={16}
          height={isActive ? 10 : 16}
          alt="Right Icon"
        />
      </div>
    </div>
  </li>
);
export default SidebarItem;

import React from "react";
import { LucideIcon } from "lucide-react";

interface TopbarItemProps {
  text: string;
  Icon: LucideIcon;
}

const TopbarItem: React.FC<TopbarItemProps> = ({ text, Icon }) => {
  return (
    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-100">
      <Icon size={16} />
      <span>{text}</span>
    </div>
  );
};

export default TopbarItem;

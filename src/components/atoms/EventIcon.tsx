import React from "react";

interface EventIconProps {
  icon: React.ReactNode;
  text: string;
}

const EventIcon: React.FC<EventIconProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-2 text-gray-600">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default EventIcon;

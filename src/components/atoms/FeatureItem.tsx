import React from "react";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg shadow-lg hover:scale-110 duration-300">
      {/* Icon */}
      <img src={icon} alt={title} className="w-20 h-20" />

      {/* Title */}
      <h3 className="text-lg font-bold">{title}</h3>

      {/* Description */}
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default FeatureItem;

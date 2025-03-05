import React from "react";

const Icon: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-8 h-8" />;
};

export default Icon;

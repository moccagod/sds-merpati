import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  text: string;
  to: string; // Ganti dari onClick ke to
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, to, className }) => {
  return (
    <Link to={to} className={`${className}`}>
      {text}
    </Link>
  );
};

export default Button;

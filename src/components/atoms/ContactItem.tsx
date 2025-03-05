import React from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  title,
  detail,
  href,
}) => {
  const content = (
    <div className="flex flex-col md:flex-row md:items-center md:gap-x-4 text-center md:text-left">
      {/* Ikon hanya tampil di desktop */}
      <div className="hidden md:flex items-center justify-center text-orange-500 text-xl">
        {icon}
      </div>

      {/* Teks contact */}
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-300 text-sm">{detail}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

export default ContactItem;

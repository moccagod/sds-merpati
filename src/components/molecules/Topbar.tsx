import React from "react";
import TopbarItem from "../atoms/TopbarItem";
import { Clock, Phone, Mail } from "lucide-react";

const Topbar: React.FC = () => {
  return (
    <div className="bg-green-950 text-white py-2 px-6 text-sm hidden md:flex">
      <div className="container mx-auto flex justify-between items-center">
        <TopbarItem text="Senin - Jumat, 07:00 - 16:00" Icon={Clock} />
        <div className="flex gap-4">
          <TopbarItem text="+62 858-8307-9508" Icon={Phone} />
          <TopbarItem text="tkalirsyadjakarta@gmail.com" Icon={Mail} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

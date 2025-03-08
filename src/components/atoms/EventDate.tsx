import React from "react";

interface EventDateProps {
  date: string;
  month: string;
}

const EventDate: React.FC<EventDateProps> = ({ date, month }) => {
  return (
    <div className="bg-yellow-500 text-white font-bold px-3 py-2 rounded-md text-center">
      <div className="text-xl">{date}</div>
      <div className="text-sm uppercase">{month}</div>
    </div>
  );
};

export default EventDate;

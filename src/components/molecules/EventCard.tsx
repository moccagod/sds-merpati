import React from "react";
import EventDate from "../atoms/EventDate";
import EventIcon from "../atoms/EventIcon";
import { CalendarDays, Clock, MapPin } from "lucide-react";

interface EventCardProps {
  date: string;
  month: string;
  title: string;
  eventDate: string;
  time?: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  month,
  title,
  eventDate,
  time,
  location,
}) => {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      {/* Bagian Kiri */}
      <div className="bg-green-950 p-3 flex items-center">
        <EventDate date={date} month={month} />
      </div>

      {/* Bagian Kanan */}
      <div className="flex-1 p-4">
        <h3 className="text-lg font-bold text-green-950">{title}</h3>
        <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
          <EventIcon
            icon={<CalendarDays size={16} className="text-yellow-500" />}
            text={eventDate}
          />
          {time && (
            <EventIcon
              icon={<Clock size={16} className="text-yellow-500" />}
              text={time}
            />
          )}
          <EventIcon
            icon={<MapPin size={16} className="text-yellow-500" />}
            text={location}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;

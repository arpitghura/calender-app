import React from "react";
import { EventItem, EventItemProps } from "./EventItem";
import { getToday } from "@/utils/getMonthData";

export interface CalenderBlockProps {
  items?: EventItemProps[];
  date: number;
  className?: string;
}

export const CalenderBlock = ({ items, date, className }: CalenderBlockProps) => {
  return (
    <div className={`flex flex-col border border-orange-400 max-w-[193px] aspect-square border-collapse ${className}`}>
      <div className={`flex h-7 w-7 p-0 items-center justify-center rounded-full text-white m-1 ${date === getToday ? "bg-blue-600" : "bg-orange-600"}`}>
        {date}
      </div>
      <div className="items flex flex-col gap-1 p-1 w-full h-full overflow-hidden">
        {items?.map((item, index) => (
          <EventItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

import React, { useEffect, useMemo } from "react";
import { EventItem, EventItemProps } from "./EventItem";
import { getToday } from "@/utils/getMonthData";
import { useAppContext } from "@/Context/AppContext";

export interface CalenderBlockProps {
  date: number;
  className?: string;
}

export const CalenderBlock = ({ date, className }: CalenderBlockProps) => {
  const { items } = useAppContext();

  const filteredItems = (items: EventItemProps[]) =>
    items?.filter(
      (item: EventItemProps) => item.date.split("-")[2] == date.toString()
    );

  const filteredEvents = useMemo(() => {
    let data;
    if (items) {
      data = filteredItems(items);
    }
    return data;
  }, [items]);

  return (
    <div
      className={`flex flex-col border border-orange-400 max-w-[193px] aspect-square border-collapse ${className}`}
    >
      <div
        className={`flex h-7 w-7 p-0 items-center justify-center rounded-full text-white m-1 ${
          date === getToday ? "bg-blue-600" : "bg-orange-600"
        }`}
      >
        {date}
      </div>
      <div className="items flex flex-col gap-1 p-1 w-full h-full overflow-hidden">
        {filteredEvents?.map((item: EventItemProps, index: number) => (
          <EventItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

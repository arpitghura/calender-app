"use client";
import React, { useEffect } from "react";
import { CalenderBlock } from "./CalenderBlock";
import { EventItemProps } from "./EventItem";

export interface CalenderBoardProps {
  is31stMonth: boolean;
  firstDayNumber: string | ["1", "2", "3", "4", "5", "6", "7"];
  items?: EventItemProps[];
}

const Dates31: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
const Dates30: number[] = Array.from({ length: 30 }, (_, i) => i + 1);

export const CalenderBoard = ({
  is31stMonth,
  firstDayNumber,
  items
}: CalenderBoardProps) => {
  // useEffect(() => {
  // }, [firstDayNumber]);

  return (
    <div className={`grid grid-cols-7 grid-rows-4 gap-0 m-0 p-0 w-full h-full`}>
      {is31stMonth
        ? Dates31?.map((date, index) => (
            <CalenderBlock
              date={date}
              key={index}
              items={items}
              className={`first-of-type:col-start-${firstDayNumber}`}
            />
          ))
        : Dates30?.map((date, index) => (
            <CalenderBlock
              date={date}
              key={index}
              items={items}
              className={`first-of-type:col-start-${firstDayNumber}`}
            />
          ))}
    </div>
  );
};

"use client";
import React, { useEffect } from "react";
import { CalenderBlock } from "./CalenderBlock";
import { EventItemProps } from "./EventItem";
import moment from "moment";
import { firstDayNumber, is31stMonth } from "@/utils/getMonthData";

export interface CalenderBoardProps {
  is31stMonth?: boolean;
  firstDayNumber?: string;
  items?: EventItemProps[];
}

//const Dates30: number[] = Array.from({ length: 30 }, (_, i) => i + 1);
const Dates30: number[] = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

export const CalenderBoard = ({items}: CalenderBoardProps) => {
  
  useEffect(() => {
    console.log(moment().startOf("month").format("d"));
  }, [firstDayNumber]);

  return (
    <div className={`grid grid-cols-7 grid-rows-4 gap-0 m-0 p-0 w-full h-full`}>
        <CalenderBlock
          date={1}
          key={1}
          items={items}
          className={`col-start-${firstDayNumber}`}
        />
      {Dates30?.map((date, index) => (
        <CalenderBlock
          date={date}
          key={index}
          items={items}
        />
      ))}
      {is31stMonth && (
        <CalenderBlock
          date={31}
          key={31}
          items={items}
        />
      )}
    </div>
  );
};

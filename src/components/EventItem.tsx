import React from "react";

export interface EventItemProps {
  title: string;
  description: string;
  date: string;
  time: string;
  bgColor?: string;
  hoverbgColor?: string;
}

export const EventItem = ({
  title,
  description,
  time,
  date,
  bgColor,
  hoverbgColor,
}: EventItemProps) => {
  return (
    <div
      className={`flex flex-col gap-0 m-0 px-1 w-full rounded-md text-white ${hoverbgColor} bg-${bgColor}-600 overflow-clip cursor-pointer select-none`}
    >
      <h1 className="text-sm font-normal w-full text-ellipsis text-nowrap">
        {title}
      </h1>
      <p className="text-xs font-normal w-full text-ellipsis text-nowrap">
        {description}
      </p>
      <p className="text-xs font-normal w-full text-ellipsis text-nowrap ">
        {date} {time}
      </p>
    </div>
  );
};

// default props values
EventItem.defaultProps = {
  bgColor: "blue",
  hoverbgColor: "hover:bg-sky-500",
};

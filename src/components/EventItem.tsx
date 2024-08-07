import React from "react";

export interface EventItemProps {
  title: string;
  description: string;
  time: string;
  bgColor?: string;
}

export const EventItem = ({
  title,
  description,
  time,
  bgColor = "bg-blue-600",
}: EventItemProps) => {
  return (
    <div
      className={`flex flex-col gap-0 m-0 px-1 w-full rounded-md text-white ${bgColor} overflow-clip`}
    >
      <h1 className="text-sm font-normal w-full text-ellipsis text-nowrap">
        {title}
      </h1>
      <p className="text-xs font-normal w-full text-ellipsis text-nowrap">
        {description}
      </p>
      <p className="text-xs font-normal w-full text-ellipsis text-nowrap ">
        {time}
      </p>
    </div>
  );
};

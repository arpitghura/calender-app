import React from "react";

export const WeekDaysTopBar = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-1 gap-0 p-0 m-0 w-full h-10">
      <div className="flex justify-center items-center max-w-[193px] h-full bg-orange-200 text-gray-600">
        Mon
      </div>
      <div className="flex justify-center items-center max-w-[193px] h-full bg-orange-200 text-gray-600">
        Tue
      </div>
      <div className="flex justify-center items-center max-w-[193px] h-full bg-orange-200 text-gray-600">
        Wed
      </div>
      <div className="flex justify-center items-center max-w-[193px] h-full bg-orange-200 text-gray-600">
        Thu
      </div>
      <div className="flex justify-center items-center max-w-[193px] h-full bg-orange-200 text-gray-600">
        Fri
      </div>
      <div className="flex justify-center items-center max-w-[193px] h-full bg-orange-200 text-gray-600">
        Sat
      </div>
      <div className="flex justify-center items-center max-w-[193px] h-full bg-orange-200 text-gray-600">
        Sun
      </div>
    </div>
  );
};

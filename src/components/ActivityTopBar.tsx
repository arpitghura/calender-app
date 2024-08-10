import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/Context/AppContext";

export const ActivityTopBar = () => {
  const router = useRouter();
  const { items, getTodayDate, getAllMonthsInShortForm, getCurrentMonth } = useAppContext();

  const allMonths = getAllMonthsInShortForm;

  const handleNavigateToCreateEvent = () => {
    router.push("/?showModal=true");
  };

  useEffect(() => {
    let getAllTodayEvents = items.filter(item => item.date === getTodayDate)
    console.log(getAllTodayEvents, "today events");
  }, [items]);

  return (
    <div className="flex flex-row justify-between p-2">
      <select
        className="border border-gray-300 rounded-md p-2 cursor-pointer"
        defaultValue={getCurrentMonth}
      >
        {allMonths?.map((month, index) => (
          <option key={index}>{month}</option>
        ))}
      </select>

      <div>
        <p className="flex text-base items-center">
          {items?.length} Events for Today
        </p>
      </div>

      {/* <div className="flex flex-row gap-2">
            <button className="border border-gray-300 rounded-md p-1">Today</button>
        </div> */}

      <div>
        <button
          className="flex border border-orange-400 rounded-lg p-2 hover:bg-orange-200 transition-colors"
          onClick={handleNavigateToCreateEvent}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>Create Event</span>
        </button>
      </div>
    </div>
  );
};

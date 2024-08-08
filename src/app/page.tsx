"use client";

import { ActivityTopBar } from "@/components/ActivityTopBar";
import { CalenderBoard } from "@/components/CalenderBoard";
import { CreateNewEvent } from "@/components/CreateNewEvent";
import { WeekDaysTopBar } from "@/components/WeekDaysTopBar";
import { Modal } from "@/utils/Modal";
import moment from "moment";
import { useSearchParams, useRouter } from "next/navigation";

// const items = [
//   {
//     title: "Meeting with John",
//     time: "10:00 AM",
//     description: "Discuss about the project",
//   },
//   {
//     title: "Meeting with Shyam",
//     time: "01:00 PM",
//     description: "Discuss about the Calender project and the much more about the new features",
//   },
//   {
//     title: "Meeting with Rohan",
//     time: "02:00 PM",
//     description: "Discuss about health",
//   },
//   {
//     title: "Meeting with Mohan",
//     time: "04:00 PM",
//     description: "Discuss about the IIT",
//   },
// ]

export default function Home() {
  const router = useRouter();
  console.log(moment().startOf("month").format("d"));
  const showModal = useSearchParams().get("showModal");
  // const firstDayNumber = moment().startOf("month").day()?.toString();
  // const is31stMonth = moment().daysInMonth() === 31;

  return (
    <>
      <ActivityTopBar />
      <WeekDaysTopBar />
      <CalenderBoard
        // is31stMonth={is31stMonth}
        // firstDayNumber={firstDayNumber}
        //items={items}
      />

      {showModal && (
        <Modal onClose={() => router.back()} modalTitle="Create New Event">
          <CreateNewEvent />
        </Modal>
      )}
    </>
  );
}

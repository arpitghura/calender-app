import { ActivityTopBar } from "@/components/ActivityTopBar";
import { CalenderBoard } from "@/components/CalenderBoard";
import { WeekDaysTopBar } from "@/components/WeekDaysTopBar";
import moment from "moment";

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
  console.log(moment().date());
  

  return (
    <main className="flex flex-col gap-0">
      <ActivityTopBar/>
      <WeekDaysTopBar />
      <CalenderBoard
        is31stMonth={moment().daysInMonth() === 31}
        //items={items}
        // firstDayNumber="4"
        firstDayNumber={moment().startOf("month").format("d")}
      />
    </main>
  );
}

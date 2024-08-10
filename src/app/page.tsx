"use client";

import { ActivityTopBar } from "@/components/ActivityTopBar";
import { CalenderBoard } from "@/components/CalenderBoard";
import { CreateNewEvent } from "@/components/CreateNewEvent";
import { WeekDaysTopBar } from "@/components/WeekDaysTopBar";
import { Modal } from "@/utils/Modal";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/Context/AppContext";
export default function Home() {
  const router = useRouter();
  const {showCreateEventModal} = useAppContext();
  
  return (
    <>
      <ActivityTopBar />
      <WeekDaysTopBar />
      <CalenderBoard />

      {showCreateEventModal && (
        <Modal onClose={() => router.back()} modalTitle="Create New Event">
          <CreateNewEvent />
        </Modal>
      )}
    </>
  );
}

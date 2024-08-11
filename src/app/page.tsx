"use client";

import { ActivityTopBar } from "@/components/ActivityTopBar";
import { CalenderBoard } from "@/components/CalenderBoard";
import { CreateNewEvent } from "@/components/CreateNewEvent";
import { WeekDaysTopBar } from "@/components/WeekDaysTopBar";
import { Modal } from "@/utils/Modal";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/Context/AppContext";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();
  const { showCreateEventModal } = useAppContext();

  const onClose = () => router.back();

  return (
    <>
      <ActivityTopBar />
      <WeekDaysTopBar />
      <CalenderBoard />

      {showCreateEventModal && (
        <Modal onClose={onClose} modalTitle="Create New Event">
          <CreateNewEvent onClose={onClose} />
        </Modal>
      )}
    </>
  );
}

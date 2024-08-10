"use client"
import React, { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from "react";
import moment from "moment";
import { EventItemProps } from "@/components/EventItem";
import { useSearchParams } from "next/navigation";

export interface AppContextType {
  getToday: number;
  getAllMonthsInShortForm: string[];
  getCurrentMonth: string;
  is31stMonth: boolean;
  firstDayNumber: string;
  getTodayDate: string;
  items: EventItemProps[];
  setItems: Dispatch<SetStateAction<EventItemProps[]>>;
  showCreateEventModal: boolean;
}

const AppWrapperDefaultValues: AppContextType = {
  getToday: 1,
  getAllMonthsInShortForm: [
    'Jan', 'Feb', 'Mar',     
    'Apr', 'May', 'Jun',     
    'Jul', 'Aug', 'Sep',     
    'Oct', 'Nov', 'Dec'      
  ],
  getCurrentMonth: 'Jan',
  is31stMonth: true,
  firstDayNumber: "1",
  items: [{
    title: "Meeting with John",
    time: "10:00 AM",
    description: "Discuss about the project",
    date: "2024-08-10"
  }],
  getTodayDate: "2024-08-10",
  setItems: () => {},
  showCreateEventModal: false,
};

const AppContext = createContext<AppContextType | undefined>(AppWrapperDefaultValues);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
}

// Provider Functions
export interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [items, setItems] = useState<EventItemProps[]>(AppWrapperDefaultValues.items);

  const sharedState: AppContextType = {
    getToday: moment().date(),
    getAllMonthsInShortForm: moment.monthsShort(),
    getCurrentMonth: moment().format("MMM"),
    is31stMonth: moment().daysInMonth() === 31,
    firstDayNumber: moment().startOf("month").day().toString(),
    getTodayDate: moment().format("YYYY-MM-DD"),
    items: items,
    setItems: setItems,
    showCreateEventModal: useSearchParams().get("showModal") === null ? false : true,
  };

  // useEffect(()=>{
  //   setItems(items);
  // }, [items])

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}


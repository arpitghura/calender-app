"use client";

import React, { useState } from "react";

export const CreateNewEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(event);
  };

  return (
    <form
      onSubmit={handleCreateEvent}
      className="flex flex-col gap-4 my-3 w-full"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="event-name">Event Name</label>
        <input
          className="border-2 rounded-md px-2 py-1 font-normal text-gray-800 outline-none focus:border-blue-600 w-full"
          type="text"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="event-date">Event Date</label>
        <input
          className="border-2 rounded-md px-2 py-1 font-normal text-gray-800 outline-none focus:border-blue-600 w-full"
          type="date"
          name="date"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="event-time">Event Time</label>
        <input
          className="border-2 rounded-md px-2 py-1 font-normal text-gray-800 outline-none focus:border-blue-600 w-full"
          type="time"
          name="time"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="event-description">Event Description</label>
        <textarea
          name="description"
          onChange={handleChange}
          className="border-2 rounded-md px-2 py-1 text-sm text-gray-800 outline-none focus:border-blue-600 w-full"
        ></textarea>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <button
          type="submit"
          className="border-2 rounded-md px-2 py-1 font-normal text-white outline-none focus:border-blue-600 w-full bg-blue-700"
        >
          Create Event
        </button>
      </div>
    </form>
  );
};

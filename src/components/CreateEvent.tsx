'use client';

import React from 'react'

export interface CreateEventProps {
    isOpen: boolean;
    onClose: () => void;
    handleCreateEvent: () => void;
}

export const CreateEvent = ({
    isOpen,
    onClose,
    handleCreateEvent
}:CreateEventProps) => {
  return isOpen && (
    <div className='flex flex-col bg-gray-400 rounded-2xl p-5 max-w-[60%] max-h-[90%] self-center'>
        <div className='flex justify-between'>
            <h1>Create an Event</h1>
            <button onClick={onClose}>Close</button>
        </div>

        <div className='flex'>
            <form onSubmit={handleCreateEvent} className='flex flex-col gap-4 w-full my-3'>
                <div>
                    <label htmlFor="event-name">Event Name</label>
                    <input type="text" id="event-name" />
                </div>
                <div>
                    <label htmlFor="event-date">Event Date</label>
                    <input type="date" id="event-date" />
                </div>
                <div>
                    <label htmlFor="event-time">Event Time</label>
                    <input type="time" id="event-time" />
                </div>
                <div>
                    <label htmlFor="event-description">Event Description</label>
                    <textarea id="event-description"></textarea>
                </div>
                <div>
                    <button type="submit" className='btn'>Create Event</button>
                </div>
            </form>
        </div>
    </div>
  )
}

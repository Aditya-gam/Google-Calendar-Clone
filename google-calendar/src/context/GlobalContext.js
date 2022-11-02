import React from "react";

const GlobalContext = React.createContext({
  // Large Calendar Month
  monthIndex: 0,
  setMonthIndex: (index) => {},

  // Small calendar Month
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},

  // Day selected on small calendar
  daySelected: null,
  setDaySelected: (day) => {},

  // Hide and show create event window
  showEventModal: false,
  setShowEventModal: () => {},

  // Crud operations on events
  dispatchCalEvent: ({ type, payload }) => {},
  savedEvents: [],

  // Read already created events
  selectedEvent: null,
  setSelectedEvent: () => {},

  // Set colour tags to events
  labels: [],
  setLabels: () => {},

  // Change colour tags
  updateLabel: () => {},

  // Filter events according to label
  filteredEvents: [],
});

export default GlobalContext;

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
});

export default GlobalContext;

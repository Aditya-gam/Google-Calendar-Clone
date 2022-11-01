import React, { useContext } from "react";

import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";

export default function CalendarHeader() {
  // Global state for months
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  // Resets the calendar to Current Month
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  // Moves the calendar to Previous Month
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  // Moves the calendar to Next Month
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  return (
    <header className="px-4 py-2 flex items-center">
      {/* Logo and title */}
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 fond-bold"> Calendar</h1>

      {/* Today Button to reset back to current month */}
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>

      {/* Button Moves the calendar to Previous Month */}
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>

      {/* Button Moves the calendar to Next Month */}
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>

      {/* Name of current displayed month */}
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}

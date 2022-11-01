import React, { useContext, useEffect, useState } from "react";

import dayjs from "dayjs";
import { getMonth } from "../util";
import GlobalContext from "../context/GlobalContext";

export default function Smallcalendar() {
  // Local states for current month
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  // Set current month
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  // import global contexts
  const {
    monthIndex,
    setSmallCalendarMonth,
    daySelected,
    setDaySelected,
  } = useContext(GlobalContext);

  // Set local states in sync with global contexts
  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  // Moves the calendar to Previous Month
  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  // Moves the calendar to Next Month
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  // Highlight current day and selected day on small calendar
  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);

    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  }
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        {/* Name of current displayed month */}
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>

        {/* Arrow buttons div */}
        <div>
          {/* Button Moves the calendar to Previous Month */}
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cousor-pointer text-gray-600 mx-2">
              chevron_left
            </span>
          </button>

          {/* Button Moves the calendar to Next Month */}
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cousor-pointer text-gray-600 mx-2">
              chevron_right
            </span>
          </button>
        </div>
      </header>

      {/* Display a smaller calendar */}
      <div className="grid grid-cols-7 grid-rows-6">
        {/* Row for single letter day format */}
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}

        {/* Display the calendar */}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              // Button syncs both large and small calendar
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

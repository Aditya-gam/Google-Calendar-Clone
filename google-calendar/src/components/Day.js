import React from "react";

import dayjs from "dayjs";

export default function Day({ day, rowIdx }) {
  //Highlights the current day
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white round-full w-7"
      : "";
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {/* Row for names of the days */}
        {rowIdx === 0 && (
          <p className="text-sm mt-1"> {day.format("ddd").toUpperCase()} </p>
        )}

        {/* Rows for all days and dates */}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
}

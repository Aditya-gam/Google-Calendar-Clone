import React, { useState, useContext, useEffect } from "react";

import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";

import "./App.css";

function App() {
  // Current month state
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  // Month context
  const { monthIndex } = useContext(GlobalContext);

  // Change global month context
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col">
        <CalendarHeader />

        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { getMonth } from "./util";
import "./App.css";

function App() {
  console.table(getMonth());
  return (
    <React.Fragment>
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

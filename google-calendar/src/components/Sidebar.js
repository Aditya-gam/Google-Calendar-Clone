import React from "react";

import CreateEventButton from "./CreateEventButton";
import Smallcalendar from "./Smallcalendar";

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <Smallcalendar />
    </aside>
  );
}

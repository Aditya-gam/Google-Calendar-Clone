import React from "react";

import CreateEventButton from "./CreateEventButton";
import Smallcalendar from "./Smallcalendar";
import Labels from "./Labels";

export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <Smallcalendar />
      <Labels />
    </aside>
  );
}

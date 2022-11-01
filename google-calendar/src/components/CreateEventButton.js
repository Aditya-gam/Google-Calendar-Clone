import React from "react";
import plusImg from "../assets/plus.svg";

export default function CreateEventButton() {
  return (
    // Button used to create an event
    <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
      <img src={plusImg} alt="Create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
}

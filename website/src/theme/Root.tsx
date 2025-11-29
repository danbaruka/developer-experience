import React from "react";
import MeetupReminderButton from "@site/src/components/MeetupReminderButton";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      {children}
      <MeetupReminderButton />
    </>
  );
}

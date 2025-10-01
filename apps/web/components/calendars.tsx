"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function Calendars() {
  const today = new Date();
  const todayUTC: Date = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
  );

  todayUTC.setHours(todayUTC.getHours() - 3);
  const [date, setDate] = React.useState<Date | undefined>(todayUTC);
  const bookedDates = Array.from({ length: 12 }, (_, i) => new Date(+i));
  console.log(today);
  console.log(todayUTC);
  console.log(today.getHours());

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={setDate}
      disabled={bookedDates}
      modifiers={{
        booked: bookedDates,
      }}
      modifiersClassNames={{
        booked: "[&>button]:line-through opacity-100",
      }}
      className="rounded-lg border shadow-sm ml-4 sm:ml-0.5"
    />
  );
}

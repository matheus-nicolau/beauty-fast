"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function Calendars() {
  const today: Date = new Date();
  const [date, setDate] = React.useState<Date | undefined>(today);
  const bookedDates = Array.from({ length: 12 }, (_, i) => new Date(+i));

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
      className="rounded-lg border shadow-sm"
    />
  );
}

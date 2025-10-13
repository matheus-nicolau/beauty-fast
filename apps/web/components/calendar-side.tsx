"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export default function CalendarSide() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={setDate}
      disabled={undefined}
      className="rounded-lg border shadow-sm ml-4 sm:ml-1"
    />
  );
}

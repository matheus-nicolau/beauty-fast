"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalendarModel() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  function handleSelect(dateNew: Date | undefined) {
    setDate(dateNew);
    console.log(dateNew);
  }

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      selected={date}
      onSelect={(dateNew) => handleSelect(dateNew)}
      className="rounded-lg border shadow-sm"
    />
  );
}

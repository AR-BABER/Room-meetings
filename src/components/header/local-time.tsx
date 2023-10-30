"use client";

import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState(
    DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS)
  );
  const [date, setDate] = useState(
    DateTime.local().toLocaleString(DateTime.DATE_FULL)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(DateTime.local().toLocaleString(DateTime.TIME_WITH_SECONDS));
      setDate(DateTime.local().toLocaleString(DateTime.DATE_FULL));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:flex grid md:gap-x-5">
      <span className="text-lg md:text-lg lg:text-xl uppercase text-center  ">
        {time}
      </span>
      <span className="text-base uppercase md:text-md lg:text-md text-center text-gray-200 font-medium">
        {date}
      </span>
    </div>
  );
}

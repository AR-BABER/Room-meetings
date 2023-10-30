import { ne } from "drizzle-orm";
import getAccessToken from "./utils";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Request) {
  //hard coded event body
  //needs to have more arguments, calender type:secondary etc
  let start: Date = new Date();
  let end: Date = new Date();
  const event = {
    summary: "test11 event",
    description: "eventDescription: huhaha",
    start: {
      dateTime: start.toISOString(), // Date.toISOString() ->//googleCalen understands ISOString dates
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // timezone of current machnine
    },
    end: {
      dateTime: end.toISOString(), // Date.toISOString() ->
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
    },
  };
  try {
    const data = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`, // Access token for google
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data;
      })
      .then((data) => {
        console.log("callender event created", data);
      });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log("error in api of Calender");
    return NextResponse.json({ status: 500 });
  }
}

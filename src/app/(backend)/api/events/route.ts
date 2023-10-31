import { ne } from "drizzle-orm";
import getAccessToken from "./utils";
import { NextResponse } from "next/server";

const id = "12abcd22";
const calendarId =
  "2be2451dfb32f45b6a4ffb2cd1666cf8ab4eb0c80becfca74d400b47fdf690fe@group.calendar.google.com";

export async function POST(req: Request, res: Request) {
  //hard coded event body
  //needs to have more arguments, calender type:secondary etc
  let start: Date = new Date();
  let end: Date = new Date();
  end.setMinutes(end.getMinutes() + 30);
  const event = {
    summary: "test20 id event",
    description: "eventDescription: huhaha",
    id: id,
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
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`, // Access token for google
        },
        body: JSON.stringify(event),
      }
    )
      .then((data) => {
        return data.json();
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

//delete
export async function DELETE(req: Request, res: Request) {
  //hard coded event body

  const eventId = id;

  try {
    const data = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      }
    );

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log("error in delete of Calender");
    return NextResponse.json({ status: 500 });
  }
}

//update
export async function PUT(req: Request, res: Request) {
  let start: Date = new Date();
  let end: Date = new Date();
  end.setMinutes(end.getMinutes() + 15);

  const event = {
    summary: " UPDATED Event with 15",
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

  const eventId = id;
  try {
    const data = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${eventId}`,
      {
        method: "PUT",
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
        console.log("UPDATED event created", data);
      });

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log("error in UPDATE api of Calender");
    return NextResponse.json({ status: 500 });
  }
}
//get
export async function GET(req: Request, res: Request) {
  // can be modified to sort by start time of events using :
  //orderBy: {
  //startTime : Order by the start date/time (ascending)
  //},
  // singleEvents=true

  try {
    const data = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      }
    ).then((data) => {
      return data.json();
    });
    console.log(data);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log("error in delete of Calender");
    return NextResponse.json({ status: 500 });
  }
}

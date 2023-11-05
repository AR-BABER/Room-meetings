import { ne } from "drizzle-orm";
import getAccessToken from "./utils";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function POST(req: Request, res: Request) {
  const { calendarId, start, end, summary, description, userID } =
    await req.json();
  const event = {
    summary: summary,
    description: description,
    start: {
      dateTime: start.toISOString(), // Date.toISOString() ->//googleCalen understands ISOString dates
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // timezone of current machnine
    },
    end: {
      dateTime: end.toISOString(), // Date.toISOString() ->
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // America/Los_Angeles
    },
    creator: {
      id: userID,
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
    console.log("error in api of events");
    return NextResponse.json({ status: 500 });
  }
}

//delete
export async function DELETE(req: NextApiRequest, res: Request) {
  const { calendarId, eventId } = await req.query;

  try {
    await fetch(
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
  const { calendarId, start, end, summary, description, eventId } =
    await req.json();
  const event = {
    summary: summary,
    description: description,

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
// can be modified to sort by start time of events using :
//orderBy: {
//startTime : Order by the start date/time (ascending)
//},
// singleEvents=true
export async function GET(req: NextApiRequest, res: Request) {
  const calendarId = req.query.calendarId as string;
  console.log(calendarId);
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

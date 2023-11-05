import { NextApiRequest } from "next";
import getAccessToken from "./utils";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Request) {
  const { summary } = await req.json();

  const event = {
    summary: summary,

    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  try {
    const calenderID = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`, // Access token for google
        },
        body: JSON.stringify(event),
      }
    ).then(async (data) => {
      const dataa = await data.json();
      console.log("callender created", dataa);
      console.log("id", dataa.id);
      return dataa.id;
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log("error in api of Calender");
    return NextResponse.json({ status: 500 });
  }
}

//update

export async function PUT(req: Request, res: Request) {
  const { calendarId } = await req.json();
  const event = {
    summary: "new updated test 5",
  };
  try {
    const calenderID = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`, // Access token for google
        },
        body: JSON.stringify(event),
      }
    ).then(async (data) => {
      const dataa = await data.json();
      console.log("callender", dataa);
      console.log("id", dataa.id);
      return dataa.id;
    });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log("error in api of Calender");
    return NextResponse.json({ status: 500 });
  }
}

//delete
export async function DELETE(req: NextApiRequest, res: Request) {
  const { calendarId } = await req.query;
  try {
    const data = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}`,
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
//get all calander
export async function GET(req: Request, res: Request) {
  try {
    const data = await fetch(
      `https://www.googleapis.com/calendar/v3/users/me/calendarList`,
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

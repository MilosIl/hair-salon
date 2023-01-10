import { Button, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../App.css";

import { useMeetingList } from "../Hooks/useMeetingsList";

export default function MeetingList() {
  const [meetings, setMeetings] = useState([]);

  // This method fetches the meetings from the database.
  useEffect(() => {
    let isCleaned = false;
    async function getMeetings() {
      const response = await fetch(`http://localhost:5000/meetings/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      if (!isCleaned) {
        const meetings = await response.json();
        setMeetings(meetings);
      }
    }

    getMeetings();

    return () => {
      isCleaned = true;
    };
  }, [meetings.length]);

  async function deleteMeeting(id) {
    await fetch(`http://localhost:5000/meetings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newMeetings = meetings.filter((el) => el._id !== id);
    setMeetings(newMeetings);
  }
  // This method will delete a record

  const handleChangeAccept = () => {
    console.log("accpet");
  };
  const handleChangeDecline = () => {
    console.log("decline");
    // needs to show user that meeting is canceled
    deleteMeeting(meetings._id);
  };

  return (
    <section>
      <h3>Meeting List</h3>
      <div style={{ display: "flex", gap: "2em", flexWrap: "wrap" }}>
        {meetings.map((meeting) => {
          return (
            <div
              key={meeting._id}
              style={{
                margin: "2em",
                padding: "1.25em",
                fontSize: "1rem",
                border: "1px solid black",
                borderRadius: ".5em",
                width: "300px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p>Customer name: {meeting.name}</p>
              <p style={{ paddingTop: "1em" }}>
                Meeting about: {meeting.usluga}
              </p>
              <p style={{ paddingTop: "1em" }}>
                Hair length:{meeting.duzinaKose}
              </p>
              <p style={{ paddingTop: "1em" }}>Day: {meeting.dan}</p>
              <p style={{ paddingTop: "1em" }}>Time: {meeting.vreme}</p>
              <Stack direction={"row"} spacing={5}>
                <Button variant="contained" onClick={handleChangeAccept}>
                  Accept
                </Button>
                <Button variant="outlined" onClick={handleChangeDecline}>
                  Decline
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </section>
  );
}

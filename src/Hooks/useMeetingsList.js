import { useEffect, useState } from 'react';

export function useMeetingList() {
  const [meetings, setMeetings] = useState([]);
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
}

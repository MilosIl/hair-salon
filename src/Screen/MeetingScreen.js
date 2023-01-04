import React from "react";
import MeetingList from "../Components/MeetingList";

// sastanak mora biti unikatan da ne sme dva se preklapaju
// da se salju prazi
// prihvatiti zahteve samo u radnom vremenu od 8:00 do 20:00
// da ne moze da se uzima datum koji je stariji od trenutnog

function MeetingScreen() {
  return (
    <div>
      <MeetingList />
    </div>
  );
}

export default MeetingScreen;

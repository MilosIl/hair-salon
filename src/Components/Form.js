import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Button, Stack, TextField } from "@mui/material";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

function Form() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [duzinaKosa, setDuzinaKosa] = useState([]);
  const [service, setService] = useState([]);
  const [name, setName] = useState("");

  const skraceno = selectedDate.toDateString();
  const vremeKartko = selectedTime.toLocaleTimeString();
  const duzinaKose = [{ kratka: "0.7" }, { srednja: "1" }, { duga: "1.4" }];
  const services = [
    {
      MuskoSisanje: "1",
    },
    { "Pranje kose": "1" },
    { "Feniranje kose na ravno": "1" },
    { "Sisanje kose sa pranjem": "1" },
    { "Skracivanje siski": "1" },
    {
      "Lokne na presu": "1",
    },
    { Pletenica: "1" },
    { "Riblja kost": "1" },
    { "Svecana frizura": "1" },
    { "Fazoniranje brade": "1" },
  ];

  const vremeSisanja = (duzinaKose, services) => {
    const breakTime = 10;
    let time = 0;
    return (time = duzinaKose * services + breakTime);
  };
  vremeSisanja(duzinaKose[1], service[1]);
  console.log(vremeSisanja);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeHair = (e) => {
    return setDuzinaKosa(e.target.value);
  };
  const handleChangeService = (e) => {
    return setService(e.target.value);
  };
  const handleChangeDate = (value) => {
    setSelectedDate(value);
  };
  const handleChangeTime = (value) => {
    setSelectedTime(value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    let noviTermin = {
      name: name,
      duzinaKose: duzinaKosa,
      usluga: service,
      dan: skraceno,
      vreme: vremeKartko,
    };
    console.log(noviTermin);
  };

  return (
    <div className="form">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={4}>
          <TextField
            label="Your name"
            color="primary"
            autoComplete="off"
            value={name}
            onChange={handleChangeName}
          />
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel>Duzina trenutne kose</InputLabel>
            <Select
              onChange={handleChangeHair}
              value={duzinaKosa}
              input={<OutlinedInput label="Duzina trenutne kose" />}
            >
              {duzinaKose.map((duzinaKosa) => (
                <MenuItem key={duzinaKosa} value={duzinaKosa.kratka}>
                  {duzinaKosa}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Service</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // multiple
              value={service || ""}
              onChange={handleChangeService}
              input={<OutlinedInput label="Service" />}
            >
              {services.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <MobileDatePicker
            label="Day for schedule"
            inputFormat="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleChangeDate}
            variant="dialog"
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Time for schedule"
            value={selectedTime}
            onChange={handleChangeTime}
            renderInput={(params) => <TextField {...params} />}
          />

          <Button variant="contained" onClick={handleClick} id="send">
            Send
          </Button>
        </Stack>
      </LocalizationProvider>
    </div>
  );
}

export default Form;

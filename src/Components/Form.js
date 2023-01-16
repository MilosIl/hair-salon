import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Box, Button, Stack, TextField } from "@mui/material";
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

  const skracenDan = selectedDate.toDateString();
  const skracenoVreme = selectedTime.toLocaleTimeString();

  const duzinaKose = [
    { value: "short", text: "short" },
    { value: "middle", text: "middle" },
    { value: "long", text: "long" },
  ];

// const [form,setForm]=useState({
//   name:"",
//   service:"",
//   hairLength:'',
//   day:"",
//   time:""
// })
// const handleChange = (e) => {
//   setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
// };
  const services = [
    { value: `male haircut`, text: "Main haircut" },
    { value: `trimming the beard`, text: "Trimming the beard" },
    { value: `hairwash`, text: "Hairwash" },
    { value: `haircut with hairwash`, text: "Haircut and hairwash" },
    { value: `bangs shortening`, text: "Bangs shortening" },
    { value: `press curl`, text: "Press curl" },
    { value: "braid", text: "Braid" },
    { value: `formal hairstyle`, text: "Formal hairstyle" },
  ];


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
  const handleClick = async (e) => {
    e.preventDefault();
    let noviTermin = {
      name: name,
      duzinaKose: duzinaKosa,
      usluga: service,
      dan: skracenDan,
      vreme: skracenoVreme,
    };
    await fetch("http://localhost:5000/meetings/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noviTermin),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  };

  return (
    <Box className="" id="create" sx={{display:'flex', justifyContent:'center',mx:'auto', maxWidth:'600px', flexDirection:{xs:'column', md:'row'}}} >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={4}>
          <TextField
            label="Your name"
            color="primary"
            autoComplete="off"
            value={name}
            onChange={handleChangeName}
          />
          <FormControl sx={{ m: 1, maxWidth: 600 }}>
            <InputLabel>Hair length</InputLabel>
            <Select
              defaultValue="Your hair length"
              onChange={handleChangeHair}
              value={duzinaKosa ?? " "}
              input={<OutlinedInput label="Hair length" />}
            >
              {duzinaKose.map((duzinaKosa) => (
                <MenuItem key={duzinaKosa.value} value={duzinaKosa.value}>
                  {duzinaKosa.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, maxWidth: 600 }}>
            <InputLabel id="services">Service</InputLabel>
            <Select
              defaultValue="Choose a service"
              labelId="services"
              value={service ?? ""}
              onChange={handleChangeService}
              input={<OutlinedInput label="Service" />}
            >
              {services.map((service) => (
                <MenuItem key={service.value} value={service.value}>
                  {service.text}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <MobileDatePicker
            label="Day for schedule"
            inputFormat="dd/MM/yyyy"
            value={skracenDan}
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
    </Box>
  );
}

export default Form;

import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Form from "../Components/Form";

import { Facebook, Instagram, Twitter } from "@mui/icons-material";
// da se ubaci radno vreme ponedeljak-petak

function FormScreen() {
  return (
    <Stack
      direction={"row"}
      spacing="2em"
      sx={{
        justifyContent: "space-around",
        p: "2em",
        mt: "4em",
      }}
    >
      <div className="levo">
        <Form />
      </div>
      <Stack className="desno">
        <Box variant="body1">
          <Typography sx={{ mt: 8 }}>Work schedule: from 8:00 to 20:00</Typography>
          <Typography sx={{textAlign:'right', mt:1}}>Monday - Friday</Typography>
          <Typography sx={{ mt: 4 }}>On weekend we don't work</Typography>
        </Box>

        <Stack direction={"row"} sx={{ mt: 8 }}>
          Social networks:
          <Box sx={{ ml: 2 }}>{<Facebook />}</Box>
          <Box sx={{ ml: 2 }}>{<Instagram />}</Box>
          <Box sx={{ ml: 2 }}>{<Twitter />}</Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FormScreen;

import { Button, FormControl, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function TestemonialForm() {
  const [user, setUser] = useState({
    username: "",
    comment: "",
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let newTestimonial = {
      user: user.username,
      message: user.comment,
    };
    await fetch("http://localhost:5000/testimonials/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTestimonial),
    }).catch((error) => {
      window.alert(error);
      return;
    });
    setUser.username = "";
    setUser.comment = "";
  };

  return (
    <Stack>
      <Stack sx={{ p: 2 }} spacing={8}>
        <FormControl>
          <TextField
            id="userName"
            label="Name"
            name="username"
            autoComplete="off"
            value={user.username}
            onChange={handleChange}
            variant="standard"
          />

          <TextField
            id="userComment"
            label="Comment"
            onChange={handleChange}
            multiline
            name="comment"
            rows={4}
            fullWidth
            value={user.comment}
            variant="standard"
          />
        </FormControl>
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleClick}>
          Save testimonial
        </Button>
      </Stack>
    </Stack>
  );
}

export default TestemonialForm;

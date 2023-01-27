import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TestemonialForm from "../Components/TestemonialForm";

function TestimonialsScreen() {
  const [testimonials, setTestimonials] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let isCleaned = false;
    async function getTestimonials() {
      const response = await fetch(`http://localhost:5000/testimonials/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      if (!isCleaned) {
        const testimonials = await response.json();
        setTestimonials(testimonials);
      }
    }
    getTestimonials();
    return () => {
      isCleaned = true;
    };
  }, [testimonials.length]);

  async function deleteTestimonial(id) {
    await fetch(`http://localhost:5000/testimonials/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newTestimonials = testimonials.filter((el) => el._id !== id);
    setTestimonials(newTestimonials);
  }

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function stringAvatar(name) {
    return {
      sx: {
        width: 50,
        height: 50,
      },
      children: `${name.split(" ")[0][0].toUpperCase()}${name
        .split(" ")[1][0]
        .toUpperCase()}`,
    };
  }
  return (
    <section>
      <Stack>
        <Typography variant="h3">What our customer's say</Typography>
        <div style={{ alignSelf: "flex-end" }}>
          <Button variant="contained" onClick={handleOpen}>
            Create a new testelmonial
          </Button>
        </div>
        <Dialog open={open} fullWidth maxWidth={"sm"} onClose={handleClose}>
          <DialogContent>
            <TestemonialForm />
          </DialogContent>
        </Dialog>
        <Stack alignItems={"flex-start"}>
          {testimonials.map((testimonial) => {
            return (
              <Stack
                key={testimonial._id}
                sx={{ flexDirection: { sm: "column", md: "row" } }}
                justifyContent={"space-around"}
                spacing={4}
                m={4}
              >
                <Stack
                  direction="column"
                  className="avatar-name estelmonial-avatar"
                >
                  <Avatar
                    {...stringAvatar(testimonial.user)}
                    className="avatar-pic"
                  />
                  <Typography variant="body1">{testimonial.user}</Typography>
                </Stack>
                <div className="testelmonial-text">
                  <div className="testelmonial-inner-text">
                    <Typography variant="body1">
                      {testimonial.message}
                    </Typography>
                  </div>
                </div>
                    <Button
                      onClick={() => {
                        deleteTestimonial(testimonial._id);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </section>
  );
}

export default TestimonialsScreen;

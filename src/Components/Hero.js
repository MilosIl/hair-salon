import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// da se ubaci div il box na mesto ispod pa da se njemu dodeli visina, koju ne bi trebao da predje.

function Hero() {
  return (
    <section className="backgroundImage">
      <Stack>
        <Typography variant="h1" className="hero-title" gutterBottom>
          Get a new hairstyle, don't get just a haircut.
        </Typography>
        <Typography variant="subtitle1">
          some text about something that is something is new something
        </Typography>

        <Link
          className="cta"
          sx={{ mt: 2 }}
          to={'/create appointment'}>
          create appointment
        </Link>
      </Stack>
    </section>
  );
}

export default Hero;

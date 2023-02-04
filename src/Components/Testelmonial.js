import { Avatar, Stack, Typography } from "@mui/material";
import "../App.css";

function Testelmonial() {
  function stringAvatar(name) {
    return {
      sx: {
        width: 60,
        height: 60,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <Stack sx={{ flexDirection: { sm: "column", md:'row' } }} justifyContent={"space-around"} spacing={4} m={4}>
      <Stack direction="column" className="avatar-name estelmonial-avatar">
        <Avatar {...stringAvatar("Verica Ruzic")} className="avatar-pic" />
        <Typography variant="p">Verica Ruzic</Typography>
      </Stack>
      <div className="testelmonial-text">
        <Typography variant="body1">
          <div className="testelmonial-inner-text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>
        </Typography>
      </div>
    </Stack>
  );
}

export default Testelmonial;

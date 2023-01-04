import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import UserAdmin from "../Components/UserAdmin";
// sa trenutnim vestima, o toj temi pokupljeno sa nekog popularnog sajta
function TrendsScreen() {
  return (
    <section className="trends-container">
      <Typography variant="h1" m={4}>
        It's in a development phase
      </Typography>
      <p>
        Please go back to <Link to={"/"}>home</Link>
      </p>
      <UserAdmin />
    </section>
  );
}

export default TrendsScreen;

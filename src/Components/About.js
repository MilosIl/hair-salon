import {
  Card,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

// ogledala sa stolicom masazer,
// neka mala galerija do 4-6 slika
import hairDye from "../Assets/Image/hair-dye.jpg";
import hairDryer from "../Assets/Image/hair-dryer.jpg";
import hairSpray from "../Assets/Image/hair-spray.jpg";
import hairStyle1 from "../Assets/Image/hair-style1.jpg";
import hairStyle2 from "../Assets/Image/hair-style2.jpg";
import hairStyle3 from "../Assets/Image/hair-style3.jpg";
import hairStyle4 from "../Assets/Image/hair-style4.jpg";
import hairStyle5 from "../Assets/Image/hair-style5.jpg";
import hairStyle6 from "../Assets/Image/hair-style6.jpg";
import hairStyle7 from "../Assets/Image/hair-style7.jpg";
import hairStyle8 from "../Assets/Image/hair-style8.jpg";
import studio from "../Assets/Image/beauty-salon.jpg";
function About() {
  const hairStyles = [
    hairStyle1,
    hairStyle2,
    hairStyle3,
    hairStyle4,
    hairStyle5,
    hairStyle6,
    hairStyle7,
    hairStyle8,
  ];
  return (
    <section className="about">
      <Stack direction={"row"}>
        <img src={studio} alt={studio} />

        <Typography variant="body1">
          Studio that knows what is the best for their clients. And if we don't
          know you can tell us We are working thogheter for 10+ years, with our
          large and happy base of clients.
        </Typography>
      </Stack>
      <Typography variant="h2" gutterBottom>
        Our services
      </Typography>
      <Typography vartiant={"subtitle1"} gutterBottom>
        Get your relax tretman in order
      </Typography>
      <Stack
        direction={"row"}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        spacing={7}
        justifyContent={"center"}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="240"
            image={hairDye}
            alt="hair dye"
          />

          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              Hair dyeing
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="240"
            image={hairDryer}
            alt="hair dryer"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              Hair drying
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="240"
            image={hairSpray}
            alt="hair spray"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" component="div">
              Hair spraying
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Stack alignItems={"center"}>
        <Box sx={{ width: 650, height: 650 }}>
          <ImageList variant="masonry" cols={4} gap={4}>
            {hairStyles.map((hairStyle) => (
              <ImageListItem key={hairStyle}>
                <img
                  src={`${hairStyle}`}
                  srcSet={`${hairStyle} 2x`}
                  alt={hairStyle}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </section>
  );
}

export default About;

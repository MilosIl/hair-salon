import {
  Card,
  CardContent,
  CardMedia,
  ImageList,
  ImageListItem,
  Stack,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


import hairDye from '../Assets/Image/hair-dye.jpg';
import hairDryer from '../Assets/Image/hair-dryer.jpg';
import hairSpray from '../Assets/Image/hair-spray.jpg';
import hairStyle1 from '../Assets/Image/hair-style1.jpg';
import hairStyle2 from '../Assets/Image/hair-style2.jpg';
import hairStyle3 from '../Assets/Image/hair-style3.jpg';
import hairStyle4 from '../Assets/Image/hair-style4.jpg';
import hairStyle5 from '../Assets/Image/hair-style5.jpg';
import hairStyle6 from '../Assets/Image/hair-style6.jpg';
import hairStyle7 from '../Assets/Image/hair-style7.jpg';
import hairStyle8 from '../Assets/Image/hair-style8.jpg';
import studio from '../Assets/Image/beauty-salon.jpg';


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
      <Stack
        direction={'row'}
        sx={{ mb: 4, flexDirection: { xs: 'column', md: 'row' } }}>
        <img src={studio} alt={studio} />
        <Box>
          <Typography variant="body1" sx={{ mt: 4, p: 2, fontSize: '1.2em' }}>
            We have been providing top-notch hair services for over 10 years,
            and we have had the privilege of working with some of the most elite
            clients in the industry. We use only the highest quality products
            and equipment, ensuring that your hair looks and feels its best
            after every visit. Our salon is equipped with state-of-the-art
            technology and staffed by friendly, professional team members.
          </Typography>
          <Typography variant='body1' sx={{p:2,fontSize:'1.2em'}}>
            We pride ourselves in being a full-service hair studio, offering a
            wide range of services that include hair cutting, styling, coloring,
            and texturizing. Our stylists will work with you to create a look
            that is both beautiful and tailored to your individual style.
          </Typography>
          <Typography variant='body1' sx={{p:2,fontSize:'1.2em'}}>
            We understand that our clients lead busy lives and that is why we
            offer flexible hours. We also offer
            online booking for your convenience.
          </Typography>
        </Box>
      </Stack>
      <Typography variant="h2" gutterBottom>
        Our services
      </Typography>
      <Typography vartiant={'subtitle1'} gutterBottom>
        Get your relax tretman in order, treat your hair with style
      </Typography>

      <Stack
        direction={'row'}
        sx={{ flexDirection: { xs: 'column', md: 'row' }, m: 4, gap: 4 }}
        justifyContent={'center'}
        alignItems={'center'}>
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
      
      <Stack alignItems={'center'} sx={{ mt: 4 }}>
        <Typography sx={{ my: 4, fontWeight: 'bold', fontSize: '1.2rem' }}>
          Some of our styles
        </Typography>
        <Box sx={{ maxWidth: 650, maxHeight: 650 }}>
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

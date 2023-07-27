import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import mailToImage from './mailToImage.png';
import linkedInImage from './linkedInImage.png';

function TeamCard({ name, position, linkedin_link, mailto_link, image_link }) {

  const handleMailToClick = () => {
    window.open(`mailto:${mailto_link}`);
  };

  const getImageIdFromUrl = (url) => {
    const match = url?.match(/[-\w]{25,}/);
    return match ? match[0] : null;
  };

  const imageId = getImageIdFromUrl(image_link);
  const formattedImageLink = imageId
    ? `https://drive.google.com/uc?export=view&id=${imageId}`
    : null;

  return (
    <Card>
      <CardMedia component="img" height="100" image={formattedImageLink} alt={name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
          <br /> 
        </Typography>

        <Typography variant="h7" component="div">
          {position}
          </Typography>

      </CardContent>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <a href={linkedin_link} target="_blank" rel="noopener noreferrer">
          <CardMedia
            component="img"
            style={{ height: '20px', width: '20px' }}
            image={linkedInImage}
            alt={name}
          />
        </a>

        <CardMedia
          component="img"
          style={{ height: '20px', width: '20px' }}
          image={mailToImage}
          alt={name}
          onClick={handleMailToClick}
        />

      </div>

      <div className="spacer"></div>

    </Card>
  );
}

export default TeamCard;

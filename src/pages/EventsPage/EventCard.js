import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { IconButton, Card, CardMedia, CardContent, Typography } from '@mui/material';

/**
 * Converts a Google Drive link to a viewable image link.
 */
export function convertDriveLink(url) {
  let splitUrl = url.split('/');
  let imageId = splitUrl[splitUrl.length - 2];
  return `https://drive.google.com/uc?export=view&id=${imageId}`;
}

/**
 * Creates a Google Calendar link for an event.
 */
const createCalendarLink = (event) => {
    let baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";

    let eventStart = new Date(event.startDateTime);
    let eventEnd = new Date(event.endDateTime);

    let text = `&text=${encodeURIComponent(event.name)}`;
    let dates = `&dates=${eventStart.toISOString().replace(/-|:|\.\d\d\d/g,"")}/${eventEnd.toISOString().replace(/-|:|\.\d\d/g,"")}`;
    let details = `&details=${encodeURIComponent(event.description)}`;
    let loc = `&location=${encodeURIComponent(event.location)}`;
  
    return `${baseUrl}${text}${dates}${details}${loc}`;
  };

/**
 * A card that displays an event.
 */ 
function EventCard({ name, start, end, description, image, location }) {
  // Convert start to a Date object and format it to a locale string
  let startDate = new Date(start);
  let formattedStartDate = startDate.toLocaleDateString();

  let convertedImageLink = image ? convertDriveLink(image) : ""; // add a condition to handle undefined image
  const calendarLink = createCalendarLink({ name, startDateTime: start, endDateTime: end, description, location });
  return (
    <Card>
      <CardMedia component="img" height="200" image={convertedImageLink} alt={name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {name} : {formattedStartDate}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        {/* Add icon button for Google Calendar link */}
        <IconButton
          href={calendarLink} target="_blank" rel="noreferrer"
          sx={{
            bgcolor: '#6599CC',
            color: 'white',
            borderRadius: '20px', 
            '&:hover': {
              bgcolor: '#478db8', 
            },
          }}
          variant="contained"
          size="large"
        >
          <CalendarMonthIcon />
          <Typography variant="body1">ADD TO GOOGLE CALENDAR</Typography>
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default EventCard;
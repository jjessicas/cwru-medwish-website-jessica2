// Footer.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import InstagramIcon from './instagram_icon.png';
import CGIcon from './CG_icon.png';
import FacebookIcon from './facebook_icon.png';

function Footer() {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      bgcolor="primary.main" 
      color="primary.contrastText" 
      py={2}
      borderTop={1}
      borderColor="black"
    >
      <a href="https://www.instagram.com/cwru.medwish/" target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon} alt="Instagram" style={{ margin: '0 20px', height: "30px", objectFit: 'contain' }} />
      </a>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'black' }} />
      <a href="https://community.case.edu/medwish/home/" target="_blank" rel="noopener noreferrer">
        <img src={CGIcon} alt="CampusGroups" style={{ margin: '0 20px', height: "30px", objectFit: 'contain' }} />
      </a>
      <Divider orientation="vertical" flexItem sx={{ borderColor: 'black' }} />
      <a href="https://www.facebook.com/CWRUMedWish/" target="_blank" rel="noopener noreferrer">
        <img src={FacebookIcon} alt="Facebook" style={{ margin: '0 20px', height: "30px", objectFit: 'contain' }} />
      </a>
    </Box>
  );
}

export default Footer;

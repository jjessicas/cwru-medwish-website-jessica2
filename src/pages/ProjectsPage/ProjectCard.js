import React from 'react';
import { Card, CardMedia, Typography, Divider, Box, Grid } from '@mui/material';
import { styled } from '@mui/system';

/**
 * Styles for ProjectCard component.
 */
const StyledCard = styled(Card)({
  padding: "76px",
  boxShadow: "none"
});

const StyledImage = styled(CardMedia)({
  opacity: 1,
  zIndex: -1,
  borderRadius: "8px"
});

const StyledTitle = styled(Typography)({
  color: "#22495F",
  fontWeight: "bold"
});

const StyledDivider = styled(Divider)({
  flexGrow: 1,
  marginLeft: "16px",
  height: '50%',
  alignSelf: 'center',
  borderTopWidth: '2px',
  borderColor: "black"
});

/**
 * ProjectCard component.
 */
const ProjectCard = ({ project, reverse = false }) => {
  return (
    <Grid container spacing={2} direction={reverse ? 'row-reverse' : 'row'}>
      <Grid item xs={12} md={6}>
        <StyledCard>
          <StyledImage
            component="img"
            alt={project.name}
            image={project.image_link}
          />
        </StyledCard>
      </Grid>
      <Grid item xs={12} md={6}>
        <StyledCard>
          <Box display="flex" alignItems="center" mb={2}>
            <StyledTitle variant="h1" component="div">
              {project.name}
            </StyledTitle>
            <StyledDivider flexItem />
          </Box>
          <Typography variant="h5" component="div">
            <Box>{project.description}</Box>
          </Typography>
        </StyledCard>
      </Grid>
    </Grid>
  )
};

export default ProjectCard;

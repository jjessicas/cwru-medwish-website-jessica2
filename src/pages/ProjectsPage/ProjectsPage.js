import React, { useState, useEffect } from "react";
import ProjectCard from './ProjectCard';
import { Card, CardMedia, Typography, Divider, Box} from '@mui/material';
import ProjectImage from './images/ProjectImage.png';

function ProjectsPage() { 
  const [projects, setProjects] = useState([]);

  const convertDriveLink = (url) => {
    let imageId = url.split('/').slice(-2)[0];
    return `https://drive.google.com/uc?export=view&id=${imageId}`;
  };

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/0ijz8ghgf80b8")
      .then(response => response.json())
      .then(data => {
        const convertedData = data.map(project => ({
          ...project,
          image_link: convertDriveLink(project.image_link),
        }));
        setProjects(convertedData);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
    {/* Project Image */}
    <Card>
        <CardMedia 
        component= "img"
        alt= "Project Background Image"
        height= "500"   
        image= { ProjectImage }
        style = {{opacity: 1, zIndex: -1}}
        />
      </Card>
    {/* Project Page Description */}
    <Divider style= {{borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin:'30px 0', color: 'white' }}/>
    <Box m={4} style={{ margin: '0 auto', maxWidth: '60%' }}>
      <Typography variant="h6" align="center">
        Members of CWRU MedWish embark on ambitious projects which require the skills and experience they have acquired in class. These projects reinforce this information in an experiential way and allow members to practice planning, communication, and teamwork. Check out some of our current projects below!
      </Typography>
    </Box>
    <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '30px 0', color: 'white' }} />
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
}

export default ProjectsPage;

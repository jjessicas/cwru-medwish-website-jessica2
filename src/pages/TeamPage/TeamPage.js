// AboutPage.js 
import React, { useState, useEffect, useRef } from "react";
import { Card, Typography, Grid, CardContent } from '@mui/material';
import "./TeamPage.css"; 
import teamHeaderImage from './teamHeader.png';
import TeamCard from './TeamCard';
import emailjs from 'emailjs-com';

function TeamPage() {
  
  /**
   * Set up Contact Form functionality 
   */
  const contactUs_link = "cwrumedwish-exec@case.edu"; 

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zvy9p6a', 'template_tymfij8', form.current, 'OShCyuHkFURY_86Ry')
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };
  

  /**
   * Fetch data from Google Sheets
   */
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "	https://sheetdb.io/api/v1/i5h3kdf9o09sd"
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEvents();
  }, []);
    
  return (
    <div className="TeamPage"> 
      
      <img src={teamHeaderImage} className="header-image" alt="Header"/> 

      <div className="spacer"></div>
      <div className="spacer-line"> </div>
                
      <div className="text">
        <p>CWRU MedWish is empowered by its executive board, faculty advisors, MedWish International mentors, and all of its members! Check out our team below.</p>
      </div>

      <div className="spacer-line"></div>
      <div className="spacer"></div>

      <div className="grid-title-group">
        <div className="grid-title"> 
          <p>CWRU MedWish Team</p>
        </div>
        <div className="grid-title-line"></div>
      </div>

      <div className="images-title-spacer"></div>
      <div className="spacer"></div>

      <Card>
        <CardContent>
          <Typography variant="h4">{}</Typography>
          <Grid container spacing={2} className="card-container">
            
            {events.map((event) => (
              <Grid item key={event.id} xs="auto" sm="auto" md="auto">
                <TeamCard
                  name={event.name}
                  position={event.position}
                  linkedin_link={event.linkedin_link}
                  mailto_link={event.mailto_link}
                  image_link={event.image_link}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
            
      <div className="spacer"></div>
      <div className="spacer-line"> </div>
      <div className="spacer"></div>

      
        <div className="contact-title"> 
          <p>Contact Us</p>
        </div>

      <div className="email-link">
        <a href={`mailto:${contactUs_link}`}>cwrumedwish-exec@case.edu</a>
      </div>

      <div className="spacer"></div>
      <div className="spacer"></div>
      
      <div class="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required></input>
            </div>
                
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required></input>
            </div>
          </div>

          <div className="spacer"></div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">Email ID</label>
              <input type="email" id="email" name="email" required></input>
            </div>
                
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required></input>
            </div>
          </div>

          <div className="spacer"></div>
              

          <div class="form-group-message">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your Message"
              required
            ></textarea>
          </div>
              
          <div className="spacer"></div>

          <div class="form-group-message">
            <div className="form-row-message">
              <div class="form-group-message">
                <button type="submit" class="submit-button">SEND MESSAGE</button>
              </div>
            </div>
          </div>

        </form>

      </div>
          
      <div className="spacer"></div>
          
    </div>    
  );    
}

export default TeamPage;
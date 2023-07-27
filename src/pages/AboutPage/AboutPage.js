// AboutPage.js
import React from "react";
import { Card, CardMedia, Typography, Divider, Grid, Box } from '@mui/material';
import About from '../Images/About.png';
import Recover from '../Images/Recover.png';
import Repurpose from '../Images/Repurpose.png';
import Redistribute from '../Images/Redistribute.png';

function AboutPage() {
    const gridStyle = {
        boxShadow: 'none',
    };
    return (
        // Overall container for page
        <Box sx={{ flexGrow: 1 }} boxShadow={"none"}>
            {/* Holds the About Header Image */}
            <Grid container direction="row" spacing={2} boxShadow={"none"}>
                <Grid xs={12} style={{ position: 'relative', marginTop: '17px', marginBottom: '12px' }}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="About Image"
                            image={About}
                            style={{ height: "auto" }}
                        />
                    </Card>
                </Grid>
                {/* Holds the First Dividing Line */}
                <Grid xs={12} marginRight={5}>
                    <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', color: 'white', position: "relative", left: "25px", right: "130px", marginLeft: "18px", marginRight: "10px" }} />
                </Grid>
                {/* Holds the About Intro Paragraph */}
                <Grid xs={8} style={{ marginTop: "17px", marginBottom: "15px" }}>
                    <Typography variant="body1"
                        align='center'
                        style={{
                            position: 'relative',
                            right: '20%',
                            left: '30%',
                            fontFamily: 'Work Sans, sans-serif',
                            fontSize: "120%"
                        }}>
                        CWRU MedWish promotes healthcare equity on an international scale assisting MedWish International in processing medical devices. Our priority is to increase access to healthcare globally by repurposing locally donated medical equipment. CWRU MedWish assists in repairing and packaging priority medical devices for use in underserved regions. Our methods of device processing are based on a comprehensive and officially verified understanding of medical device guidelines.</Typography>
                </Grid>
                {/* Holds the Second Divider Line */}
                <Grid xs={12} marginRight={5}>
                    <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '10px 0', color: 'white', position: "relative", left: "25px", right: "130px", marginLeft: "18px", marginRight: "10px" }} />
                </Grid>
                {/* Holds the 3 Stickers for Recover, Repurpose, and Redistribute */}
                <Grid container direction="row" xs={12}  style={{ marginTop: "20px" }}>
                    {/* Holds the What We Do Text */}
                    <Grid xs={12} style={{ marginTop: "10px", marginBottom: "10px"}}>
                        <Typography variant="h1"
                            align='center'
                            style={{
                                position: 'relative',
                                color: '#6599CC',
                                fontWeight: '800'
                            }}
                        >
                            WHAT WE DO
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Recover} style={gridStyle} height={170} width={160} style={{ position: 'relative', left: '28%' }} />
                    </Grid>
                    <Grid xs={4}>
                        <img src={Repurpose} style={gridStyle} height={150} width={160} style={{ position: 'relative', left: '33%', top: "5%" }} />
                    </Grid>
                    <Grid xs={4}>
                        <img src={Redistribute} style={gridStyle} height={150} width={170} style={{ position: 'relative', left: '28%', top: "8%" }} />
                    </Grid>
                </Grid>
                {/* Holds the What We Do Paragraph */}
                <Grid xs={10} style={{ marginBottom: "20px" }}>
                    <Typography variant="body1"
                        align="center"
                        style={{
                            position: 'relative',
                            right: '20%',
                            left: '10%',
                            color: 'gray',
                            fontFamily: "Work Sans, sans-serif",
                            fontSize: "350",
                            fontWeight: "450",
                        }}
                    >
                        MedWish bridges the gap between abundance and absence, surplus, and scarcity. Our
                        work improves access to quality healthcare while promoting enviromental
                        stewardship.
                    </Typography>
                </Grid>
                {/* Holds the Third Dividing Line*/}
                <Grid xs={12} marginRight={5} style={{ marginBottom: "10px" }}>
                    <Divider style={{ borderTopWidth: '1px', borderTopColor: 'gray', height: '0px', margin: '5px 0', color: 'white', position: "relative", left: "25px", right: "130px", marginLeft: "18px", marginRight: "10px" }} />
                </Grid>
            </Grid>
        </Box>
    );
}
export default AboutPage;

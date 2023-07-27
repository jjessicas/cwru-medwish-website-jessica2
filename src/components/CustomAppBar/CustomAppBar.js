import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MedWishLogo from './CustomAppBar_MedWishLogo.png';

const Divider = () => <Box borderRight={1} borderColor="black" mx={1} />;

const MedWishLogoButton = () => (
    <Box display="flex" flexGrow={1} justifyContent="left">
        <Button color="secondary" component={RouterLink} to="/" startIcon={<img src={MedWishLogo} alt="MedWish Logo" style={{ height: "40px", objectFit: 'contain' }} />} />
    </Box>
);

const JoinButton = () => (
    <Box display="flex" flexGrow={1} justifyContent="right">
        <a
            href="https://community.case.edu/MedWish/club_signup"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="#00355E"
                borderRadius="16px"
                px={2}
                py={1}
                width="65px"
                height="25px"
                cursor="pointer"
            >
                <Button color="primary" sx={{ textTransform: 'none' }}>
                    Join
                </Button>
            </Box>
        </a>
    </Box>
);

const WideMenuContent = () => (
    <Box display="flex" justifyContent="center" flexGrow={2}>
        <Button color="secondary" component={RouterLink} to="/about" sx={{ textTransform: 'none' }}>About</Button>
        <Divider />
        <Button color="secondary" component={RouterLink} to="/projects" sx={{ textTransform: 'none' }}>Projects</Button>
        <Divider />
        <Button color="secondary" component={RouterLink} to="/events" sx={{ textTransform: 'none' }}>Events</Button>
        <Divider />
        <Button color="secondary" component={RouterLink} to="/team" sx={{ textTransform: 'none' }}>Team</Button>
    </Box>
);

const MobileDrawerContent = () => (
    <Box display="flex" flexDirection="column" alignItems="center" p={2}>
        <WideMenuContent />
    </Box>
);

function CustomAppBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (open) => (event) => {
        setIsDrawerOpen(open);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                {isMobile ? (
                    <>
                        {/* MedWish Logo on the left */}
                        <MedWishLogoButton />

                        {/* Hamburger Icon in the center */}
                        <IconButton color="secondary" onClick={toggleDrawer(true)}>
                            <Box display="flex" flexGrow={1} justifyContent="center">
                                <IconButton color="secondary" onClick={toggleDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </IconButton>

                        {/* Join Button on the right */}
                        <JoinButton />

                        <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                            <MobileDrawerContent />
                        </Drawer>
                    </>
                ) : (
                    <>
                        <MedWishLogoButton />
                        <WideMenuContent />
                        <JoinButton />
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default CustomAppBar

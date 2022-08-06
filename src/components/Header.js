import React from "react";
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
import "./Header.css";

//component to render header with logo image and avatar
const Header = () => {

    return (
        <Box className="header">
            <Box component="img"
                className="header-logo"
                alt="nxtWave-logo"
                src="nxtWave1.jpg"
            />
            <Avatar className="avatar-logo" alt="person" src="person.png" />
        </Box>
    );
};

export default Header;
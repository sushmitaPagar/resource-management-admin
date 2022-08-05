import React from "react";
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
import "./Header.css";

const Header = () => {

    return (
        <Box className="header">
            {/* <Box classname="header-logo">
                <img src="nxtWave1.jpg" alt="nxtWave-logo"></img>
            </Box> */}
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